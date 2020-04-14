var express = require('express');
var router = express.Router();
const Home = require('../models/testimonials');


router.get('/homedata', function (req, res, next) {
    Home.getAllcards(function (err, d) {
      if (err) return next(err)
      res.status(200).json({ testimonials: d })
    })
  })


module.exports = router;