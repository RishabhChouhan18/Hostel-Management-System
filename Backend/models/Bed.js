const mongoose = require("mongoose");

const bedSchema = new mongoose.Schema(
  {
    bedNumber: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Available", "Occupied"],
      default: "Available",
    },

    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bed", bedSchema);