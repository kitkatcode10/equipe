var mongoose = require('mongoose');
const Schema = mongoose.Schema; 

var gearSchema = new mongoose.Schema({
  name: String,
  modelMake: {type: String, required: true }, 
  brand: String,
  useType: String,
  condition: {type: String, required: true }, 
  maintenance: [{type: Schema.Types.ObjectId, ref: 'Maintenance'}],
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