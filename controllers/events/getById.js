const { Event } = require('../../models')

const getById = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await Event.findById(id)
    if (!result) {
      return res.status(404).json({ message: 'Not found' })
    }
    res.json({ result })
  } catch (error) {
    next(error)
  }
}

module.exports = getById
