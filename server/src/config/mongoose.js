const mongoose = require('mongoose')
const config = require('config')

mongoose.connect(config.get('mongoose:uri'))
// var db = mongoose.connection
module.exports = mongoose
