var mongoose = require('mongoose')
var CategorySchema = new mongoose.Schema({
  name: {
    type: String
  },
  img: {
    data: Buffer,
    contentType: String
  }
})
var Category = mongoose.model('Category', CategorySchema)
module.exports = Category
