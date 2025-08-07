import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import componentRoutes from "./routes/componentRoute.js";

// Initialize express app
const app = express();

// Middleware
app.use(express.json());

// CORS configuration
// Allow all origins and methods for simplicity; adjust as needed for production
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Load environment variables from .env file
dotenv.config();

// Import routes
app.use("/api", componentRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database Connected Successfully");

    const server = app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is Running on Port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error connecting to the database:", error);
  }
};

// Start the server
startServer();