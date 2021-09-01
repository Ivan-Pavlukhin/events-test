const { Schema, model } = require('mongoose')
const Joi = require('joi')

const concertHallSchema = Schema({
  name: {
    type: String,
    required: [true, 'Название зала нужно указать обязательно']
  },
  city: {
    type: String,
    required: [true, 'Город нужно указать обязательно']
  },
  phone: {
    type: String,
    required: false,
    match: /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/
    // minlength: 15,
    // maxlength: 15
  },
  dateEvent: {
    type: Date
  },
  size: {
    type: {}
  }
}, { versionKey: false, timestamps: true })

const joiConcertHallSchema = Joi.object({
  name: Joi.string().required(),
  city: Joi.string().required(),
  phone: Joi.string(),
  dateEvent: Joi.date(),
  size: Joi.object()
})

const ConcertHall = model('concertHall', concertHallSchema)

module.exports = { ConcertHall, joiConcertHallSchema }
