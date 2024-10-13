const express = require('express');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// POST: Create a new user (Sign Up)
router.post('/signup', signup);

// POST: Log in an existing user
router.post('/login', login);

module.exports = router;
