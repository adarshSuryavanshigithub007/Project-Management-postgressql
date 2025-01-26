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

const updatePasswordValidation = (req,res,next)=>{
  return Validate([
    check('oldPassword')
    .isLength({ min: 6 })
    .withMessage('Old password must be at least 6 characters long'),
    check('newPassword')
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters long'),
    check('confirmPassword')
    .isLength({ min: 6 })
    .withMessage('Confirm password must be at least 6 characters long and must be match with new password'),

  ])(req,res,next)
}

module.exports = { loginValidation,updatePasswordValidation }; // Export using CommonJS
