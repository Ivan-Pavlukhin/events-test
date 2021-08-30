const express = require('express')
// TODO validateSchema
const { joiUserSchema } = require('../../models/user')
const {validation} = require('../../middelewares')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/', validation(joiUserSchema), ctrl.add)

module.exports = router
