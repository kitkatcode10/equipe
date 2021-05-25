var mongoose = require('mongoose');
const Schema = mongoose.Schema; 

var gearSchema = new mongoose.Schema({
  name: String,
  modelMake: String, 
  brand: String,
  useType: String,
  condition: String, 
  forBorrow: Boolean, 
}, {
  timestamps: true
});

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String, 
  email: String,
  gear: [gearSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);