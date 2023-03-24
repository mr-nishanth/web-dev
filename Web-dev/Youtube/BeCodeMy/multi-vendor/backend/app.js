const path = require("path");
const express = require("express");
const ErrorHandler = require("./utils/ErrorHandler");
const app = express();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const fileUpload = require("express-fileupload");

// Disable x-powered-by features
app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));
app.use(helmet());

// For multer
app.use(fileUpload({ useTempFiles: true }));

// Configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: path.join(__dirname, "backend", "config", ".env"),
  });
}

// Home page
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<center><h1>Welcome to the Multi Vendor E-commerce Backend</h1></center>`
    );
});

// 404 Page Not Found
app.all("*", (req, res) => {
  res.status(404).json({ message: `Invalid requested ${req.path} path` });
});

// Error Handling
app.use(ErrorHandler);

module.exports = app;
