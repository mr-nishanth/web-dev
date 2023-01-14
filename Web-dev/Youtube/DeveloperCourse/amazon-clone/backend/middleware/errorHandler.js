// NOT FOUND

export const NOT_FOUND = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Custom error handler
export const customErrorHandler = (err, req, res, next) => {
  // const statusCode = res.statusCode ?? 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({ message: err?.message, stack: err?.stack });
};
