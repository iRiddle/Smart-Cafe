const User = require('../models/User')
const Categories = require('../models/Category')

module.exports = {
  async put (req, res) {
    const category = await Categories.create(req.body)
    User.findById(req.params.id)
      .then((User) => {
        User.categories.push(category)
        User.save()
        res.send(category)
      })
      .catch((err) => res.status(400).json(err))
  },
  async show (req, res) {
    try {
      await User.findById(req.params.id).exec(
        function (err, docs) {
          if (err) return res.send(err)
          res.send(docs.categories)
        }
      )
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the data'
      })
    }
  }
}
