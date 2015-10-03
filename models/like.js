var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Like', LikeSchema);
