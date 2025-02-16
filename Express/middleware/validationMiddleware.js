// validationMiddleware.js

const { validationResult } = require('express-validator');

const Validate = (validation) => {
  // console.log("validation<<<<<",validation)
  return async (req, res, next) => {
    try {
      // Run all validations in parallel
      // console.log( Promise.all(validation.map((validation) => validation.run(req))))
      await Promise.all(validation.map((validation) => validation.run(req)));
    } catch (err) {
      return res.status(500).json({
        message: 'Internal Server Error',
      });
    }

    const errors = validationResult(req);
    console.log(errors)
    if (errors.isEmpty()) {
      return next(); // Continue if there are no validation errors
    }

    const formattedError = errors.array().reduce((acc, error) => {
      console.log('Error Object:-===========', error.param);
      acc[error.path] = error.msg;
      console.log(error.msg)
      return acc;
    }, {});
console.log(formattedError)
    res.status(400).json({
      error: formattedError,
      message: 'Given data is invalid',
    });
  };
};

module.exports = Validate; // Export using CommonJS
