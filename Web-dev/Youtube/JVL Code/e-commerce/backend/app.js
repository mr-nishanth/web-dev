
const express = require('express');
const cors = require("cors")
const logger = require("morgan")

const app = express();

// setup body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// CORS middleware
app.use(cors())

// Logger middleware
app.use(logger("dev"))




// Setup Product route
app.use("/api/v1", require("./routes/products.routes"))


module.exports = app