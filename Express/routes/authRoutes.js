const express = require('express');
const { loginValidation, updatePasswordValidation, resetPasswordValidation } = require('../validations/authValidation');
const authController = require('../controller/authController'); 
const  authMiddleware  = require('../middleware/authMiddleware');

const router = express.Router();

router.post(
    '/login', 
    loginValidation, 
    authController.login
);

router.post (
    '/updatePassword',
    updatePasswordValidation,
    authMiddleware,
    authController.updatePassword
)

router.post(
    '/resetPassword',
    resetPasswordValidation,
    authController.ResetPassword
)

router.post(
    '/forgotpassword',
    authController.forgotPassword
)

module.exports = router; // Ensure you're exporting the router correctly
