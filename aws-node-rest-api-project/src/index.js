const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())

const userRoutes = require('./user/route')

app.use('/user',userRoutes)

app.use(bodyParser.json())
module.exports = app;
