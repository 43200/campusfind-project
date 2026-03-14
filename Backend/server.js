const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ROUTE IMPORTS */
const authRoutes = require("./routes/auth");
const institutionRoutes = require("./routes/institutionsRoute");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use("/api/reviews", reviewRoutes);
/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* MONGODB CONNECTION */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

/* API ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/institutions", institutionRoutes);
app.use("/api/users", userRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("🚀 CampusFind API is running");
});

/* SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});