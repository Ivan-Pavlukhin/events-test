const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const { DB_HOST } = process.env

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('<h2>Home page</h2>')
})



mongoose.connect(DB_HOST, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(3000)
    })
    .catch(error => console.log(error))