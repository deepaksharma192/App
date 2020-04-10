const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../configs/jwt-config')
const ensureAuthenticated = require('../modules/ensureAuthenticated');
const VideoNote = require('../models/VideoNote');


router.post('/', ensureAuthenticated, function (req, res, next) {
    let data = req.body;
    data.uid = req.userID;
    VideoNote.createVideoNote(data, function (error, _res) {
        if (error) return next(error)
        if (_res) {
            VideoNote.getVideoNoteById(_res.cid, _res.uid, function (_error, __res) {
                if (_error) return next(_error)
                if (__res) {
                    res.json({ message: 'ture', data: __res })
                }
            })
        }
    })
});


router.get('/:cid', ensureAuthenticated, function (req, res, next) {
    let cid = req.params.cid;
    let uid = req.userID;
    VideoNote.getVideoNoteById(cid, uid, function (error, _res) {
        if (error) return next(err)
        if (_res) {
            res.json({ message: 'ture', data: _res })
        }
    })
});




module.exports = router;