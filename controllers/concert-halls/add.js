const { ConcertHall } = require('../../models')

const add = async (req, res, next) => {
  try {
    const result = await ConcertHall.create(req.body)
    res.status(201).json({
      result
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = add
