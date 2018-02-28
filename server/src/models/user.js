var mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  secondName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})
var User = mongoose.model('User', UserSchema)
module.exports = User
