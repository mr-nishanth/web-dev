// Override the default express error handler
export const errorHandlerMiddleware = (err, req, res, next) => {
  // If the status code specified take code that else 500
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
