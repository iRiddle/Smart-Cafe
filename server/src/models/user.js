var Promise = require('bluebird')
var mongoose = require('mongoose')
var bcrypt = Promise.promisifyAll(require('bcrypt'))

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  employers: []
})

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  try {
    const hash = await bcrypt.hashAsync(this.password, 16.5)
    this.password = hash
    next()
  } catch (err) {
    next(err)
  }
})

UserSchema.methods.passwordIsValid = function (password) {
  try {
    return bcrypt.compareAsync(password, this.password)
  } catch (err) {
    throw err
  }
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
