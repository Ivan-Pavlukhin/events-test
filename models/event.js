const { Schema, model } = require('mongoose')
const Joi = require('joi')
// const { string } = require('joi')

const eventSchema = Schema(
  {
    eventName: {
      type: String,
      required: [true, 'Название концерта нужно указать обязательно'],
    },
    city: {
      type: String,
      required: [true, 'Название город нужно указать обязательно'],
    },
    dateEvent: {
      type: String,
      require: [true, 'Дату проведения нужно указывать обязательно'],
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
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
)

const joiEventSchema = Joi.object({
  eventName: Joi.string().required(),
  city: Joi.string().required(),
  hallName: Joi.string().required(),
  aboutEvent: Joi.string().required(),
  dateEvent: Joi.date(),
  size: Joi.array(),
  active: Joi.boolean(),
})

const Event = model('event', eventSchema)

module.exports = { Event, joiEventSchema }
