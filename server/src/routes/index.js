const express = require('express')
const User = require('../models/User')
const UserController = require('../controllers/UserController')
const EmployersController = require('../controllers/EmployersContoller')
const router = express.Router()
// const User = require('../models/User')

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return
    var userMap = {}
    users.forEach(function (user) {
      userMap[user._id] = user
    })
    res.send(userMap)
  })
})
router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.put('/employers/:id', EmployersController.put)
router.get('/employers/:id', EmployersController.show)
module.exports = router
