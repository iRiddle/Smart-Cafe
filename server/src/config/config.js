module.exports = {
  port: 3000,
  url: 'mongodb://localhost/datbase',
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
