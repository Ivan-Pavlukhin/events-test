const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const api = require('./routes/api')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/users', api.users)
app.use('/api/v1/concertHalls', api.concertHalls)

const { DB_HOST, PORT = 4000 } = process.env

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT)
  })
  .catch(error => console.log(error))
