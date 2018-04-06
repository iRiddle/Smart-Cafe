var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

UserSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

var User = mongoose.model('User', UserSchema)
module.exports = User

// var createUser = function (newUser, callback) {
//   bcrypt.genSalt(10, function (handleCallbackError, salt) {
//     bcrypt.hash(newUser.password, salt, function (handleCallbackError, hash) {
//       newUser.password = hash
//       newUser.save(callback)
//     })
//   })
// }
// module.exports = createUser
