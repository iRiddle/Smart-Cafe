var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
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

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (handleCallbackError, salt) {
    bcrypt.hash(newUser.password, salt, function (handleCallbackError, hash) {
      newUser.password = hash
      newUser.save(callback)
    })
  })
}
