const path = require("path");
const express = require("express");
const CustomErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

// Disable x-powered-by featuresP
app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));
app.use(helmet());

// For static assets
app.use("/", express.static(path.join(__dirname, "..", "uploads")));

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

// Routes
app.use("/api/v2/user", require("./controllers/user.controllers"));

// 404 Page Not Found
app.all("*", (req, res) => {
  res.status(404).json({ message: `Invalid requested ${req.path} path` });
});

// Error Handling
app.use(CustomErrorHandler);

module.exports = app;
