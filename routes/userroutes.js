const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Define Routes
router.post('/register', registerUser);  // ✅ Correctly defines the registration route
router.post('/login', loginUser);        // ✅ Correctly defines the login route

module.exports = router;
