const { Schema, model } = require('mongoose')
const Joi = require('joi')

const concertHallSchema = Schema({
  eventName: {
    type: String,
  },
  city: {
    type: String,
    required: [true, 'Название город нужно указать обязательно'],
  },
  dateEvent: {
    type: String,
    // unique: true,
    // match: /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/
    // minlength: 15,
    // maxlength: 15
    // "2021-12-18T13:00"
  },
  hallName: {
    type: String,
    required: [true, 'Название зала нужно указівать обязательно'],
  },
  aboutEvent: {
    type: String,
    default: ''
  },
  size: [
    {
      rowName: String,
      row: [{
        place: String,
        active: Boolean,
        price: String
      }]
    }
  ],
  active: {
    type: Boolean,
    default: false
  },
},
{ versionKey: false, timestamps: true }
)

const joiConcertHallSchema = Joi.object({
  eventName: Joi.string(),
  city: Joi.string().required(),
  hallName: Joi.string().required(),
  aboutEvent: Joi.string(),
  dateEvent: Joi.date(),
  size: Joi.array().required(),
  active: Joi.boolean(),
})

const ConcertHall = model('concert-hall', concertHallSchema)

module.exports = { ConcertHall, joiConcertHallSchema }
