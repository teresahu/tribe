var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');
var Event = require('../models/event');
var Interest = require('../models/interest');

// Index
router.get('/', function(req, res, next) {
  res.render('./events/index.ejs', { message: req.flash() });
});

// Show
router.get('/:id', function(req, res, next) {
  res.render('./events/show.ejs', { message: req.flash() });
});

module.exports = router;
