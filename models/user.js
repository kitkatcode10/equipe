var mongoose = require('mongoose');

var gearSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String, 
  email: String,
  equipments: [gearSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);