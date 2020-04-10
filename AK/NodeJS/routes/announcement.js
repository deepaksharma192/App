const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../configs/jwt-config')
const ensureAuthenticated = require('../modules/ensureAuthenticated')
const User = require('../models/User');
const Announcement = require('../models/Announcement');



router.get('/:ctype',ensureAuthenticated, function (req, res, next) {
    let ctype = req.params.ctype;
    Announcement.getAnnouncementById(ctype, function (error, _res) {
        if (error) return next(err)
        if (_res) {
            res.json({ message: 'ture', data: _res })
        }
    })
});




module.exports = router;