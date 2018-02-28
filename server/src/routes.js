module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `hello ${req.body.email}! Пользователь зареган с паролем ${req.body.password}`
    })
  })
  app.get('/', (req, res) => {
    res.send('privet')
    console.log('hi')
  })
}
