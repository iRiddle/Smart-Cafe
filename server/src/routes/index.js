const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()
// const User = require('../models/User')

router.get('/', (req, res) => {
  res.json({
    message: 'helloh'
  })
  console.log('he')
})

router.post('/register', UserController.register)
router.post('/login', UserController.login)

/// ///////////////////////////////////////////////////////

// var newUser = new User({
// firstName: req.body.firstName,
// secondName: req.body.secondName,
// email: req.body.email,
// password: req.body.password
// })
// newUser.save(function (err, user) {
// if (err) throw err
// else console.log(user)
// res.send('suckass')
// })
// res.redirect('/users/login')
// router.get('/login', (req, res) => {
// })

module.exports = router
// module.exports = (app) => {

//   // app.post('/register', (req, res) => {
//   //   res.send({
//   //     message: `hello ${req.body.email}! Пользователь зареган с паролем ${req.body.password}`
//   //   })
//   // })
//   app.get('/', (req, res) => {
//     res.send('privet')
//     console.log('hi')
//   })
// }

//  router.post('/signup', passport.authenticate('local.signup', {
//   successRedirect: '/info',
//   failureRedirect: '/signup',
//   failureFlash: true
// }))

// router.post('/login', passport.authenticate('local.login', {
//   successRedirect: '/info',
//   failureRedirect: '/login',
//   failureFlash: true
// }))
