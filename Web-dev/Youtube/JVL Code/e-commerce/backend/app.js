
const express = require('express');
const cors = require("cors")
const logger = require("morgan")
const errorHandler = require("./middleware/errors")
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


// Error handling middleware
app.use(errorHandler)

module.exports = app