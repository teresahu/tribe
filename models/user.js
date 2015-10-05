var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
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

UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
