const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = 3000
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.email}! Пользователь зареган с паролем ${req.body.password}`
  })
})

app.get('/', (req, res) => {
  res.send('privet')
  console.log('hi')
})

app.listen(process.env.PORT || port, (res, err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('сервер забущен на порту ' + port)
  }
})
