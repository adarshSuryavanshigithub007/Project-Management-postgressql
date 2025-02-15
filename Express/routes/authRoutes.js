const express = require('express');
const { loginValidation, updatePasswordValidation } = require('../validations/authValidation');
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
    authController.ResetPassword
)

module.exports = router; // Ensure you're exporting the router correctly
