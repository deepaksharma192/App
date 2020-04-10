const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../configs/jwt-config')
const ensureAuthenticated = require('../modules/ensureAuthenticated')
const User = require('../models/User');
const Bookmarking = require('../models//Bookmark');


//POST /signin
router.post('/', ensureAuthenticated, function (req, res, next) {
    var data = req.body;
    data.uid = req.userID;
    Bookmarking.updateBookmarkById(data,function (error, res_) {
        if (error) return next(err)
        if (res_) {
            res.json({ message: 'true', data: res_ })
        }else{
            res.json({ message: 'false', data: res_ })
        }
    })
});
router.get('/:cid',ensureAuthenticated, function (req, res, next) {
    let cid = req.params.cid;
    let uid = req.userID;

    Bookmarking.getBookmarkById(uid,cid, function (error, _res) {
        if (error) return next(err)
        if (_res) {
            res.json({ message: 'ture', data: _res, uid:uid })
        }
    })
});

router.get('/:id', function (req, res, next) {
    let id = req.params.id
    Course.getCourseById(id, function (error, user) {
        if (error) return next(err)
        if (user) {
            res.json({ message: 'ture', data: user })
        }
    })
});


module.exports = router;