const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const authRoutes = require("./routes/authRoutes");
const hostelRoutes = require("./routes/hostelRoutes");
const authMiddleware = require("./middleware/authMiddleware")
const roomRoutes = require("./routes/roomRoutes");
const bedRoutes = require("./routes/bedRoutes");
// Middleware
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/hostels", hostelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/beds", bedRoutes);
// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Hostel Management API Running"
    });
});


module.exports = app;