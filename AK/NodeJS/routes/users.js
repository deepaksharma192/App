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
      return res.status(200).json({ data: null })
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
  User.updateCartByUserId(id, newdata, function (err, user_) {
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
      } else {
        res.json({ data: user })
      }
    })



  })
})





module.exports = router;