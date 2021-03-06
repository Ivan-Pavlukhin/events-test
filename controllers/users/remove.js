const { User } = require('../../models')

const remove = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await User.findByIdAndDelete(id)
    if (!result) {
      return res.status(404).json({ message: 'Not found' })
    }
    res.json({ result })
  } catch (error) {
    next(error)
  }
}

module.exports = remove
