const express = require('express')
//  const passport = require('passport')
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res) => {
  res.json({
    message: 'helloh'
  })
  console.log('he')
})

router.get('/info', (req, res) => {
  res.send('it me')
  console.log('he')
})
// Не работает пост запрос на регистрацию
router.post('/register', (req, res) => {
  var firstName = req.body.firstName
  var secondName = req.body.secondName
  var email = req.body.email
  var password = req.body.password
  var newUser = new User({
    firstName: firstName,
    secondName: secondName,
    email: email,
    password: password
  })
  User.createUser(newUser, function (err, user) {
    if (err) throw err
    console.log(user)
    res.send('suckass')
  })
  res.redirect('/users/login')
})
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
