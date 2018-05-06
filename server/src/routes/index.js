const express = require('express')
const User = require('../models/User')
const UserController = require('../controllers/UserController')
const EmployersController = require('../controllers/EmployersContoller')
const CategoriesController = require('../controllers/CategoryController')
const router = express.Router()

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

router.put('/categories/:id', CategoriesController.put)
router.get('/categories/:id', CategoriesController.show)
module.exports = router
