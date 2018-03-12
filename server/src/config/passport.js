var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var User = require('../models/User')

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
function (req, email, password, done) {
  User.findOne({'email': email}, function (err, user) {
    if (err) {
      return done(err)
    }
    if (user) {
      return done(null, false)
    }
    var newUser = new User()
    newUser.email = req.body.email
    newUser.password = newUser.encryptPassword(req.body.password)
    newUser.save(function (err) {
      if (err) {
        return done(err)
      }
      return done(null, newUser)
    })
  })
}))
