const express = require('express')

const { joiConcertHallsSchema } = require('../../models/concert-halls')
const { validation } = require('../../middlewares')
const { concertHalls: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/', validation(joiConcertHallsSchema), ctrl.add)

module.exports = router
