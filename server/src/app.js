const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')
// const path = require('path')
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const users = require('./models/User')
const config = require('./config')
const app = express()
const passport = require('passport')
const routes = require('./routes/index')
require('./config/passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

mongoose.connect('mongodb://localhost/smartCafe')

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use(session(
  {
    secret: 'mysecretkey',
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({mongooseConnection: mongoose.connection})
  }
))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)
app.use('/users', users)

app.listen(port, (res, err) => {
  if (err) {
    console.log('Error')
  } else {
    console.log('сервер запущен на порту ' + config.get('port'))
  }
})
