var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');
var Event = require('../models/event');
var Interest = require('../models/interest');

// New
router.get('/new', function(req, res, next) {
  res.render('./interests/new.ejs', { message: req.flash() });
});

// Edit
router.get('/:id/edit', function(req, res, next) {
  res.render('./interests/edit.ejs', { message: req.flash() });
});

module.exports = router;
