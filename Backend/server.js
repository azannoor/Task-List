import express from "express";
// import mongoose from "mongoose";
import connectDB from "./config/DB.js";
// import corsMiddleware from "./config/Cors.js";
import cors from 'cors'
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Call the connectDB function to establish the connection
connectDB();

// Middleware
// Apply CORS middleware
// app.use(corsMiddleware);
app.use(cors())
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
console.log('hell0')

app.get('/',(req,res)=>{
res.json({msg:'Welcome'})
})

// Routes
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";





app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/notifications", notificationRoutes);



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
