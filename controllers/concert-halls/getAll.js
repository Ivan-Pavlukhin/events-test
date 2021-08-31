const { ConcertHall } = require('../../models')

const getAll = async (req, res, next) => {
  try {
    const result = await ConcertHall.find({})
    res.json({ result })
  } catch (error) {
    next(error)
  }
}

module.exports = getAll
