const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createRoom,
  getAllRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

router.post("/", protect, createRoom);

router.get("/", protect, getAllRooms);

router.get("/:id", protect, getRoomById);

router.put("/:id", protect, updateRoom);

router.delete("/:id", protect, deleteRoom);

module.exports = router;