var mongoose = require('mongoose')
var EmployerSchema = new mongoose.Schema({
  name: {
    type: String
  },
  password: {
    type: String
  },
  access_me: {
    type: Boolean
  },
  access_an: {
    type: Boolean
  },
  date: {
    type: Date
  }
})
var Employer = mongoose.model('Employer', EmployerSchema)
module.exports = Employer
