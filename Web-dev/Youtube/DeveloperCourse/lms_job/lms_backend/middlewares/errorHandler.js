// NOT FOUND ERROR HANDLER

const notFound = (req, res, next) => {
    const error = new Error(`Path not found: ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Error handlers

const handleError = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);
    res.json({ status: false, message: err?.message, stack: err?.stack });
};

module.exports = { handleError, notFound };
