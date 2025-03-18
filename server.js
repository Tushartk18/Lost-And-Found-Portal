const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();
connectDB(); // ✅ Connect to MongoDB before initializing Express

const app = express();

// Middleware
app.use(express.json()); // ✅ Allows JSON request body
app.use(cors()); 

// Import and Use Routes
const userRoutes = require('./routes/userroutes'); // ✅ Fix import name
app.use('/api/users', userRoutes); // ✅ Mount routes correctly

// Test Route
app.get('/', (req, res) => {
    res.send('Lost & Found Portal API is Running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
