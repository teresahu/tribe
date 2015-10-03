var mongoose = require('mongoose');
var Like = require('./like');

var EventSchema = new mongoose.Schema({
  name: String,
  likes: [Like],
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Event', EventSchema);
