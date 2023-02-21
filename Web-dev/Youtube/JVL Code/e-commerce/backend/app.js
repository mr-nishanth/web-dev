const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const errorMiddleware = require("./middleware/error");
const app = express();
const helmet = require("helmet");
// setup body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use(cors());

// Logger middleware
app.use(logger("dev"));

// Basic security middleware
app.use(helmet());

// Setup Product route
app.use("/api/v1", require("./routes/products.routes"));

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;
