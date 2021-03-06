const { ConcertHall } = require('../../models')

const update = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await ConcertHall.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
      return res.status(404).json({ message: 'Not found' })
    }
    res.json({ result })
  } catch (error) {
    next(error)
  }
}

module.exports = update
