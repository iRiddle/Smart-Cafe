const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const db = require('./config/db')
const morgan = require('morgan')
const port = process.env.PORT || 3000
const app = express()
// const routes = require('./routes')(app)
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
MongoClient.connect(db.port, (err, database) => {
  if (err) {
    return console.log(err)
  } else {
    require('./routes')(app, database)
    app.listen(port, (res, err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('сервер забущен на порту ' + port)
      }
    })
  }
})
