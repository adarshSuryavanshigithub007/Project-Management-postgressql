const express = require('express');
const authRoutes = require('../routes/authRoutes'); // Ensure correct import path

const router = express.Router();

// Use the auth routes at the '/auth' path
router.use('/auth', authRoutes); 

module.exports = router;
