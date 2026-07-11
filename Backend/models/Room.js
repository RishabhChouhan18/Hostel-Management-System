const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: true,
      trim: true,
    },

    floor: {
      type: Number,
      required: true,
    },

    roomType: {
      type: String,
      enum: ["Single", "Double", "Triple", "Four Sharing"],
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    occupiedBeds: {
      type: Number,
      default: 0,
    },

    hostel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hostel",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Room", roomSchema);