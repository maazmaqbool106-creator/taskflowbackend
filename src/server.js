const taskRoutes = require("./routes/taskroutes");
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/user");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("Backend is working!");
});

app.use("/api/tasks", taskRoutes);

app.post("/api/users", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});