const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const helmet = require("helmet");

// setup body parser middleware for parsing json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware for allow cross origin requests
app.use(cors());

// Logger middleware
app.use(logger("dev"));

// Helmet middleware for basic security
app.use(helmet());

module.exports = app;
