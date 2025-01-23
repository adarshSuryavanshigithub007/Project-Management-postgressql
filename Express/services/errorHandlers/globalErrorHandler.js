// services/errorHandlers/globalErrorHandler.js

const globalErrorHandler = (err, req, res, next) => {
    // Set default status code and status
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    // Send error response
    res.status(statusCode).json({
        status: status,
        message: err.message || 'Internal Server Error',
    });
};

module.exports = globalErrorHandler;
