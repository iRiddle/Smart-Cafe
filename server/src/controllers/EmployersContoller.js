const Employers = require('../models/Employers')
const User = require('../models/User')
module.exports = {
  async put (req, res) {
    const employer = await Employers.create(req.body)
    User.findById(req.params.id)
      .then((User) => {
        User.employers.push(employer)
        User.save()
        res.send(employer)
      })
      .catch((err) => res.status(400).json(err))
  },
  async show (req, res) {
    try {
      await User.findById(req.params.id).exec(
        function (err, docs) {
          if (err) return res.send(err)
          res.send(docs.employers)
        }
      )
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the songs'
      })
    }
  }
}
