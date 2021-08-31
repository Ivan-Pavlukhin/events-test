const express = require('express')
// TODO validateSchema
const { joiUserSchema } = require('../../models/user')
const { validation } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/', validation(joiUserSchema), ctrl.add)

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.put('/:id', validation(joiUserSchema), ctrl.update)

router.delete('/:id', ctrl.remove)

module.exports = router
