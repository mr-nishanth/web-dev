class ErrorHandler extends Error {
    constructor(message, statusCode) {
        // Calling parent constructor for set new error message
        super(message)
        this.statusCode = statusCode
        ErrorHandler.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler