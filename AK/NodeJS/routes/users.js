const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../configs/jwt-config')
const ensureAuthenticated = require('../modules/ensureAuthenticated')
const User = require('../models/User');
const TypedError = require('../modules/ErrorHandler');
const Otp = require('../models/Otp');
const { otpGenerator } = require('./../modules/otpGenerator')
const EnrolledUser = require('./../models/Enrolled');

/* mail verificatiion */
const sendEmail = require('../modules/email/email.send')
const msgs = require('../modules/email/email.msgs')
const templates = require('../modules/email/email.templates')
/* mail verificatiion */

//POST /signin

router.post('/login', async (req, res) => {
  let otp = await otpGenerator();
  let number = req.body.number;
  let timestamp = new Date().getTime();
  let data = {
    otp: otp,
    number: number,
    timestamp: timestamp
  }
  Otp.createOtp(data, (err, res_) => {
    if (err) console.log(err)
    return res.status(200).json({ data: res_ })
  })
})
function veryfyOtp(req, res, next) {
  let otp = req.body.otp;
  let number = req.body.number;
  let timestamp = new Date().getTime();
  let data = {
    otp: otp,
    number: number,
    timestamp: timestamp
  }
  Otp.veryfyOtp(data, (err, res_) => {
    if (err) console.log(err);
    if (res_.length === 1) {
      next();
    } else {
      return res.status(200).json({ user_token: null })
    }
  })
}
//POST /login
router.post('/veryfy-otp', veryfyOtp, function (req, res, next) {
  const { number } = req.body || {}
  if (!number) {
    let err = new TypedError('login error', 400, 'missing_field', { message: "missing number" })
    return next(err)
  }

  User.getUserByNumber(number, function (err, user) {
    if (err) return next(err)
    if (!user) {
      var newUser = new User({
        number: number,
        status: "pending",
      });
      User.createUser(newUser, function (err, users) {
        if (err) return next(err);
        // res.json({ message: 'user created' })
        let token = jwt.sign(
          { number: number, id: users.id },
          config.secret,
          { expiresIn: '7d' }
        )
        return res.status(201).json({
          user_token: {
            user_id: users.id,
            user_name: users.fullname,
            token: token,
            expire_in: '7d'
          }
        })
      });
    } else {
      let token = jwt.sign(
        { number: number, id: user.id },
        config.secret,
        { expiresIn: '7d' }
      )
      res.status(201).json({
        user_token: {
          user_id: user.id,
          user_name: user.fullname,
          token: token,
          expire_in: '7d'
        }
      })
    }

  })
})
router.get('/user-details', ensureAuthenticated, function (req, res, next) {
  let id = req.userID;
  User.getUserById(id, function (err, user) {
    if (err) return next(err)
    res.json({ data: user })
  })
})

router.put('/update-details', ensureAuthenticated, function (req, res, next) {
  let id = req.userID;
  let newdata = req.body;
  //const { email } = req.body
  User.updateUserFirstTimeById(id, newdata, function (err, user_) {
    if (err) return next(err);
    User.getUserById(id, function (err, user) {
      if (err) return next(err)
      if (newdata.class) {
        let ED = {
          user_id: id,
          payment: "free",
          payment_id: "123456",
          status: "active"
        }
        EnrolledUser.enrolledUser(ED, (res_) => {
          res.json({ data: user })
        })
        console.log('create email >> ', newdata, id, user);

        if(!user.mailidverified){
          console.log('mail id not confirmed ', user.mailidverified);
          sendEmail(newdata.email, templates.confirm(id))
          .then(() => res.json({ msg: msgs.confirm }))
          .catch(err => console.log(err))
        }else{
          console.log('mail id is confirmed ', user.mailidverified);
          res.json({ msg: msgs.alreadyConfirmed })
        }
        
      } else {
        res.json({ data: user })
      }
    })
  })
})

router.put('/update-details/all', ensureAuthenticated, function (req, res, next) {
  let id = req.userID;
  let newdata = req.body;
  User.updateUserById(id, newdata, function (err, user_) {
    if (err) return next(err);
    User.getUserById(id, (err1, user1) => {
      if (err1) return next(err1);
      res.json({ data: user1 });
    })
  })
})



module.exports = router;