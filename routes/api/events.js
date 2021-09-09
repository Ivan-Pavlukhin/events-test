const express = require('express')

const { validation } = require('../../middlewares')
const { joiEventSchema } = require('../../models/event')
const { events: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/', validation(joiEventSchema), ctrl.add)

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.delete('/:id', ctrl.remove)

router.put('/:id', ctrl.update)

module.exports = router

// const express = require('express')

// const { joiConcertHallSchema } = require('../../models/concert-hall')
// const { validation } = require('../../middlewares')
// const { concertHalls: ctrl } = require('../../controllers')

// const router = express.Router()

// router.post('/', validation(joiConcertHallSchema), ctrl.add)
// router.get('/', ctrl.getAll)
// router.get('/:id', ctrl.getById)
// router.patch('/:id', ctrl.update)
// router.delete('/:id', ctrl.remove)

// module.exports = router
