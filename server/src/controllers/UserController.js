var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var User = require('../models/User')

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

router.post('/register', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    email: req.body.email,
    password: req.body.password
  },
  function (err, user) {
    // if (err) return res.status(500)
    if (err) return res.status(500).send('There was a problem adding the information to the database.')
    res.status(200).send(user)
    // res.status(200).send(user)
    // res.send({
    //   message: `hello ${req.body.email}! Пользователь зареган с паролем ${req.body.password}`
    // })
  }
  )
})
module.exports = router
