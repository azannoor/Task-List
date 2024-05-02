import express from 'express';
import connectDB from '../Backend/config/DB.js'; // Import the connectDB function
const app = express();
// Middleware
app.use(express.json()); // Parse JSON bodies
// Routes
app.get("/", (req, res) => {
    res.send('Welcome');
});
const start = async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        // Start the Express server
        app.listen(5000, () => {
            console.log('Server is listening on port 5000');
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};
start();