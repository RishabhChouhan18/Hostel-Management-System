const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createBed,
  getAllBeds,
} = require("../controllers/bedController");

router.post("/", protect, createBed);

router.get("/", protect, getAllBeds);

module.exports = router;