const { constants } = require("../constant");
const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = res.statusCode ?? 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      return res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: process.env.NODE_ENV !== "production" ? err.stack : null,
      });
    case constants.UNAUTHORIZED:
      return res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: process.env.NODE_ENV !== "production" ? err.stack : null,
      });

    case constants.FORBIDDEN:
      return res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: process.env.NODE_ENV !== "production" ? err.stack : null,
      });

    case constants.NOT_FOUND:
      return res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: process.env.NODE_ENV !== "production" ? err.stack : null,
      });

    case constants.CONFLICT:
      return res.json({
        title: "Conflict",
        message: err.message,
        stackTrace: process.env.NODE_ENV !== "production" ? err.stack : null,
      });
    case constants.SERVER_ERROR:
      return res.json({
        title: "Internal Server Error",
        message: err.message,
        stackTrace: process.env.NODE_ENV !== "production" ? err.stack : null,
      });

    default:
      console.log(`No error all good`);
  }
};

module.exports = errorHandlerMiddleware;
