require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");

const PORT = process.env.PORT ?? 3600;
const { dbConn } = require("./contact-app/config/dbConn");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

app.listen(PORT, () => console.log(`Application is listening on ${PORT}`));
