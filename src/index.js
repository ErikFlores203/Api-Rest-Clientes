const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const clieteRoutes = require('./routes/clienteRoutes.js')

const app = express()
const port = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())
app.use('/', clieteRoutes)
//Routes
app.get('/', (req, res) => {
    res.send("is running")
    res.header('Access-Control-Allow.Origin','*')
})


//connect mongodb
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conected'))
    .catch((error) => console.error(error))


app.listen(port, () => console.log("Server listening on", port))