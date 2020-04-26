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
        if (error) return res.json({ message: 'false', data: error })
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
        if (error) return res.json({ message: 'false', data: error })
        if (_res) {
            res.json({ message: 'ture', data: _res, uid:uid })
        }else{
            res.json({ message: 'false', data: _res })
        }
    })
});

router.get('/:id', function (req, res, next) {
    let id = req.params.id
    Course.getCourseById(id, function (error, user) {
        if (error) return res.json({ message: 'false', data: error })
        if (user) {
            res.json({ message: 'ture', data: user })
        }else{
            res.json({ message: 'false', data: user })
        }
    })
});

router.get('/all/status',ensureAuthenticated, function (req, res, next) {
    let uid = req.userID;
    Bookmarking.getBookmarkByIdForUser(uid, function (error, bookmarking) {
        if (error) return  res.json({ message: 'false', data: error })
        if (bookmarking) {
            res.json({ message: 'ture', data: bookmarking })
        }else{
            res.json({ message: 'false', data: bookmarking })
        }
    })
});

module.exports = router;