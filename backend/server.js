import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import componentRoutes from "./routes/componentRoute.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.urlencoded({ extended: true }));
dotenv.config();
app.use("/api", componentRoutes);

const PORT = process.env.PORT || 5000;


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

startServer();