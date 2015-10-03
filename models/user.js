var mongoose = require('mongoose');
var Like = require('./like');

var UserSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String
  },
  first_name: String,
  last_name: String,
  likes: [Like.schema],
  location: String,
  saved_events: [{ type: mongoose.Schema.ObjectId, ref: 'Event' }]
});

module.exports = mongoose.model('User', UserSchema);
