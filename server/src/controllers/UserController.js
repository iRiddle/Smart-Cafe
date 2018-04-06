var passport = require('passport')
const jwt = require('jsonwebtoken')
const config = require('../config')
var User = require('../models/User')

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'Мэйл уже используется'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'Логин информация была некорректна'
        })
      }

      const isPasswordValid = await user.validPassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Логин некорректен'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Произошла ошибка при входе'
      })
    }
  }
}

// passport.use('local.signup', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   nameField: 'name',
//   passReqToCallback: true
// },
// function (req, email, password, done) {
//   User.findOne({'email': email}, function (err, user) {
//     if (err) {
//       return done(err)
//     }
//     if (user) {
//       return done(null, false)
//     }
//     var newUser = new User()
//     newUser.email = req.body.email
//     newUser.password = newUser.encryptPassword(req.body.password)
//     newUser.name = req.body.name
//     newUser.save(function (err) {
//       if (err) {
//         return done(err)
//       }
//       return done(null, newUser)
//     })
//   })
// }))

// passport.use('local.login', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true
// },
// function (req, email, password, done) {
//   User.findOne({ 'email': email }, function (err, user) {
//     if (err) {
//       return done(err)
//     }
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' })
//     }
//     if (!user.validPassword(password)) {
//       return done(null, false, { message: 'Incorrect password.' })
//     }
//     console.log('зашел ' + user)
//     return done(null, user)
//   })
// }
// ))
