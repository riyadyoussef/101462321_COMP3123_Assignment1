const express = require('express');
const connectDB = require('./config/db');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the COMP3123 Assignment 1 API');
});

// Define routes
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/emp', require('./routes/employeeRoutes'));

// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

