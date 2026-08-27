require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskroutes");
const authRoutes = require("./routes/authroutes");

const app = express();

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