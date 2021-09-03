const { Event } = require('../../models')

const add = async (req, res, next) => {
  try {
    const result = await Event.create(req.body)
    res.status(201).json({
      result
    })
  } catch (error) {
    next(error)
  }
}

module.exports = add
