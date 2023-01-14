require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const dbConnection = require("./config/dbConn");

const PORT = process.env.PORT ?? 3600;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// Database connection
dbConnection();

app.listen(PORT, () => console.log(`Application is listening on ${PORT}`));
