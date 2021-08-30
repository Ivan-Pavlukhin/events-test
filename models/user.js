const { Schema, model } = require('mongoose')
const Joi = require('joi')

const userSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  city: {
    type: String,
    default: 'Kiyv'
  },
  status: {
    type: String,
    enum: ['customer', 'admin']
  }
}, { versionKey: false, timestamps: true })

const joiUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  city: Joi.string().required(),
  status: Joi.string()
})

const User = model('user', userSchema)

module.exports = { User, joiUserSchema }
