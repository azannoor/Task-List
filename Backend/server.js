import express from "express";
// import mongoose from "mongoose";
import connectDB from "./config/DB.js";
// import corsMiddleware from "./config/Cors.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Call the connectDB function to establish the connection
connectDB();

// Middleware
// Apply CORS middleware
// app.use(corsMiddleware);
app.use(express.json());




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
