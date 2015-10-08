var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');
var Event = require('../models/event');

var authenticated = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.redirect('/');
  }
  else {
    next();
  }
};

// Index
router.get('/', authenticated, function(req, res, next) {
  var intersection = [];
for (var i=0; i<user[0].interests.length; i++) {
    for (var k=0; k<events.length; k++) {
        for (var j=0; j<events[k].interests.length; j++)         {
            if (user[0].interests[i] === events[k].interests[j]);
            {
                intersection.push(events[k].name);
            }
        }
    }
}
console.log(intersection);
var arr = intersection;
var obj = { };
for (var i = 0, j = arr.length; i < j; i++) {
   if (obj[arr[i]]) {
      obj[arr[i]]++;
   }
   else {
      obj[arr[i]] = 1;
   }
}

console.log(obj);
  res.render('./events/index.ejs', { message: req.flash() });
});

// Show
router.get('/:id', authenticated, function(req, res, next) {
  res.render('./events/show.ejs', { message: req.flash() });
});

module.exports = router;
