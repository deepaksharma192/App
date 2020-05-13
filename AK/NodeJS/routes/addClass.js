const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../modules/ensureAuthenticated');
const AddClass = require('../models/AddClassAdmin');


router.get('/class', ensureAuthenticated, function (req, res) {

    AddClass.getAllClass(function (error, result) {
        console.log(1)
        if (error) res.json({ message: 'false', data: error });
        if (result) {
            res.json({ message: 'true', data: result });
        }
    })
});
router.post('/class/add', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.addClass(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        if (result) {
            AddClass.getAllClass(function (error1, result1) {
                if (error1) res.json({ message: 'false', data: error1 });
                res.json({ message: 'true', data: result1 });
            })
        }
    })
});
router.post('/subjects', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.getAllSubject(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        if (result) {
            res.json({ message: 'true', data: result });
        }
    })
});
router.post('/subjects/add', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.addSubject(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        AddClass.getAllSubject(data, function (error1, result1) {
            if (error1) res.json({ message: 'false', data: error1 });
            if (result1) {
                res.json({ message: 'true', data: result1 });
            }
        })
    })
});
router.post('/chapter', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.getAllChapter(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        if (result) {
            res.json({ message: 'true', data: result });
        }
    })
});
router.post('/chapter/add', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.addChapter(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        AddClass.getAllChapter(data, function (error1, result1) {
            if (error1) res.json({ message: 'false', data: error1 });
            if (result1) {
                res.json({ message: 'true', data: result1 });
            }
        })
    })
});
router.post('/topic', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.getAllTopic(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        if (result) {
            res.json({ message: 'true', data: result });
        }
    })
});
router.post('/topic/add', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.addTopic(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        AddClass.getAllTopic(data, function (error1, result1) {
            if (error1) res.json({ message: 'false', data: error1 });
            if (result1) {
                res.json({ message: 'true', data: result1 });
            }
        })
    })
});
router.post('/video', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.getAllVideo(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        if (result) {
            res.json({ message: 'true', data: result });
        }
    })
});
router.post('/video/add', ensureAuthenticated, function (req, res) {
    let data = req.body;
    AddClass.addVideo(data, function (error, result) {
        if (error) res.json({ message: 'false', data: error });
        AddClass.getAllVideo(data, function (error1, result1) {
            if (error1) res.json({ message: 'false', data: error1 });
            if (result1) {
                res.json({ message: 'true', data: result1 });
            }
        })
    })
});
module.exports = router;