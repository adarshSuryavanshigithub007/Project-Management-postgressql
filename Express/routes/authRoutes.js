const express = require('express');
const { loginValidation } = require('../validations/authValidation');
const authController = require('../controller/authController'); 

const router = express.Router();

router.post('/login', loginValidation, authController.login);

module.exports = router; // Ensure you're exporting the router correctly
