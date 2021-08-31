const { Schema, model } = require('mongoose')
const Joi = require('joi')

const eventExampleSchema = Schema({
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
    unique: true,
    match: /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/
    // minlength: 15,
    // maxlength: 15
  },
  dateEvent: {
    type: Date,
    required: true,
  },
  size: {
    type: {}
  }
}, { versionKey: false, timestamps: true })

const joiConcertHallsSchema = Joi.object({
  name: Joi.string().required(),
  city: Joi.string().required(),
  phone: Joi.string().required(),
  dateEvent: Joi.date()
})

const ConcertHall = model('concertHall', eventExampleSchema)

module.exports = { ConcertHall, joiConcertHallsSchema }
