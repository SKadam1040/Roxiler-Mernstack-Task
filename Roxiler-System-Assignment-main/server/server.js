import express from 'express';
import 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Config/connect.js';
import transactionRouter from './Routes/transactionRoutes.js';
import databaseRoutes from './Routes/databaseRoutes.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON payloads
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173', // Adjust according to your frontend's URL if necessary
    })
);

// Test Route
app.get('/test', (req, res) => {
    res.send('Server is working!');
});

// API Routes
app.use('/', databaseRoutes); // Database Routes
app.use('/', transactionRouter); // Transaction Routes

// Start server and listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`--> server is live on http://localhost:${PORT} <--`.blue.italic);
});
