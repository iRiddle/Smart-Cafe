const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
// const path = require('path')
// const mongoose = require('mongoose')
const users = require('./models/User')
const config = require('./config')
const app = express()
const passport = require('passport')
const routes = require('./routes/index')
const expressSession = require('express-session')
app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())
app.use(expressSession(
  {
    secret: config.get('session:secret'),
    saveUnitialized: config.get('session:saveUnitialized'),
    resave: config.get('session:resave')
    // cookie: config.get('session:cookie')
  }
))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)
app.use('/users', users)

app.listen(config.get('port'), (res, err) => {
  if (err) {
    console.log('Error')
  } else {
    console.log('сервер запущен на порту ' + config.get('port'))
  }
})
