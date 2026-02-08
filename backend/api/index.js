const express = require("express");
const cors = require("cors");

const connectDB = require("../config/db");
const menuRoutes = require("../routes/menuRoutes");
const aiRoutes = require("../routes/aiRoutes");

// Connect DB (serverless-safe, cached)
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/menu", menuRoutes);
app.use("/api/ai", aiRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("VoiceBite API is running on Vercel 🚀");
});

module.exports = app;
