// validationMiddleware.js

const { validationResult } = require('express-validator');

const Validate = (validation) => {
  return async (req, res, next) => {
    try {
      // Run all validations in parallel
      await Promise.all(validation.map((validation) => validation.run(req)));
    } catch (err) {
      return res.status(500).json({
        message: 'Internal Server Error',
      });
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next(); // Continue if there are no validation errors
    }

    const formattedError = errors.array().reduce((acc, error) => {
      acc[error.param] = error.msg;
      return acc;
    }, {});

    res.status(400).json({
      error: formattedError,
      message: 'Given data is invalid',
    });
  };
};

module.exports = Validate; // Export using CommonJS
