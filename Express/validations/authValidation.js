// loginValidation.js

const Validate = require('../middleware/validationMiddleware'); // CommonJS import
const { check } = require('express-validator');

const loginValidation = (req, res, next) => {
  return Validate([
    check('username')
      .notEmpty()
      .withMessage('Enter a Valid username'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ])(req, res, next); // Run the Validate function with these validations
};

module.exports = { loginValidation }; // Export using CommonJS
