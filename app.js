const express = require('express');
const connectDB = require('./config/db');

// Initialize express
const app = express();

// Connect to Database
connectDB();

// Initialize Middleware
app.use(express.json());

// define a route to test the server
app.get('/', (req, res) => {
    res.send('Welcome to COMP3123 Assignment1 API');
});

// define routes
app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/emp', require('./routes/employeeRoutes'));

// set server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

