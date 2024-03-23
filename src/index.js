
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const clieteRoutes = require('./routes/clienteRoutes.js')

const app = express()
const port = process.env.PORT || 115

// Middleware
app.use(express.json())
app.use('/', clieteRoutes)


app.get('/', (req, res) => {
    res.send("is running")
})

//connect mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conected'))
    .catch((error) => console.error(error))


app.listen(port)