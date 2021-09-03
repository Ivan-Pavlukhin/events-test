const { Event } = require('../../models')

const getAll = async (req, res, next) => {
  try {
    const result = await Event.find({})
    res.json({ result })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll
