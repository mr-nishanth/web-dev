const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //   Wrong mongodb ID
  if (err.name === "CastError") {
    const message = `Resource not found with mongodb ID , Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Duplicate Key (eg: email address)
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered `;
    err = new ErrorHandler(message, 400);
  }

  //   Wrong jwt token/Invalid jwt token
  if (err.name === "JsonWebTokenError") {
    const message = `Your url is invalid, please try again letter`;
    err = new ErrorHandler(message, 400);
  }

  // Expired Jwt token
  if (err.name === "TokenExpireError") {
    const message = `Your url is expired, please try again letter`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
