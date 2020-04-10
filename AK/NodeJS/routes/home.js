var express = require('express');
var router = express.Router();
const Home = require('../models/homepage');


router.get('/homedata', function (req, res, next) {
    Home.getAllcards(function (err, d) {
      if (err) return next(err)
      res.status(200).json({ departments: d })
    })
  })


module.exports = router;