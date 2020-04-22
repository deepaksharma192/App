const EnrolledUser = require('./../models/Enrolled');
const User = require('../models/User');

function enrolled(req, res, next) {
    EnrolledUser.getEnrolledUserById(req.userID, (err, res_) => {
        if (err) console.log(err)
        if (res_ && res_.length >= 1) {
            User.getUserById(req.userID, (err1, res1_) => {
                if (err1) console.log(err1);
                if (res1_.class) {
                    req.userClass = res1_.class
                    next()
                } else {
                    res.json({ message: 'false', data: null })
                }

            })

        } else {
            res.json({ message: 'false', data: null })
        }
    })

}

module.exports = enrolled;