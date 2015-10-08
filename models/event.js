var mongoose = require('mongoose');


var EventSchema = new mongoose.Schema({
  name: String,
  interests: [String],
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Event', EventSchema);
