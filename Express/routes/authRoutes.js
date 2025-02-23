const express = require('express');
const { loginValidation, updatePasswordValidation, resetPasswordValidation, forgotPasswordValidation } = require('../validations/authValidation');
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const upload = require("../middleware/multerMiddleware");
router.post(
    '/login',
    loginValidation,
    authController.login
);

router.post(
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

router.post(
    '/updateProfile',
    upload.single("avatar"), // Add multer middleware for handling file uploads
    authMiddleware,
    authController.updateProfile
)

router.post(
    '/me',
    authMiddleware,
    authController.me
)

router.post(
    '/logout',
    authMiddleware,
    authController.logout
)

module.exports = router; // Ensure you're exporting the router correctly
