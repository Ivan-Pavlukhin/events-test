const express = require('express')

const { concertHalls: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/', ctrl.add)

module.exports = router
