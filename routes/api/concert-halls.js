const express = require('express')

const { joiConcertHallsSchema } = require('../../models/concert-hall')
const { validation } = require('../../middlewares')
const { concertHalls: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/', validation(joiConcertHallsSchema), ctrl.add)
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.patch('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)

module.exports = router
