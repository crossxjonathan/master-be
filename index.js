/* eslint-disable no-undef */
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./src/route/user.route');

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is undefined
const app = express();

// CORS Configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Allow frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
    credentials: true, // Allow cookies and auth headers
};

// Apply CORS Middleware
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/api', userRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
