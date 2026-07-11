const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createHostel,
//   getAllHostels,
  getHostelById,
  updateHostel,
  deleteHostel,
} = require("../controllers/hostelController");

router.post("/", protect, createHostel);
// router.get("/", protect, getAllHostels);
router.get("/:id", protect, getHostelById);
router.put("/:id", protect, updateHostel);
router.delete("/:id", protect, deleteHostel);

module.exports = router;