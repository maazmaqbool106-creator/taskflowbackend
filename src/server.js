require("dotenv").config();
const cors = require('cors');


console.log("JWT SECRET LOADED:", !!process.env.JWT_ACCESS_SECRET);
console.log("JWT REFRESH SECRET LOADED:", !!process.env.JWT_REFRESH_SECRET);

const express = require("express");
const app = express();

app.use(cors());

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskroutes");
const authRoutes = require("./routes/authroutes");


connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;   