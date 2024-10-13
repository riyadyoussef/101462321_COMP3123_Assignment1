const express = require('express');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// POST: Create a new user
router.post('/signup', signup);

// POST: Login a user
router.post('/login', login);

module.exports = router;
