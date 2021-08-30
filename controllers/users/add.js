const { User } = require('../../models')

const add = async (req, res, next) => {
  try {
    const result = await User.create(req.body)
    res.status(201).json({
      result
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = add
