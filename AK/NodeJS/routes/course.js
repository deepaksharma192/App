const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require('../configs/jwt-config')
const ensureAuthenticated = require('../modules/ensureAuthenticated')
const User = require('../models/User');
const Course = require('../models/Course');
const enrolled = require('./../modules/enrolled');


//POST /signin
router.get('/all', ensureAuthenticated, enrolled, function (req, res, next) {
    let classes = req.userClass;
    Course.getAllCourse(classes, function (error, user) {
        if (error) return next(err)
        if (user) {
            res.json({ message: 'true', data: user })
        }
    })
});
router.get('/:id', ensureAuthenticated, enrolled, function (req, res, next) {
    let id = req.params.id
    Course.getCourseById(id, function (error, user) {
        if (error) return next(err)
        if (user) {
            res.json({ message: 'ture', data: user })
        }
    })
});

router.get('/class/all', function (req, res, next) {
    Course.getAllClasses(function (error, user) {
        if (error) return next(err)
        if (user) {
            res.json({ message: 'ture', data: user })
        }
    })
});

module.exports = router;