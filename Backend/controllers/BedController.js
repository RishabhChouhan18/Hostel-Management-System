const Bed = require("../models/Bed");
const Room = require("../models/Room");

// Create Bed
exports.createBed = async (req, res) => {
  try {

    const { bedNumber, roomId } = req.body;

    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    const bedExists = await Bed.findOne({
      bedNumber,
      room: roomId,
    });

    if (bedExists) {
      return res.status(400).json({
        success: false,
        message: "Bed already exists",
      });
    }

    const bed = await Bed.create({
      bedNumber,
      room: roomId,
    });

    res.status(201).json({
      success: true,
      message: "Bed Created Successfully",
      bed,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
// Get all beds
exports.getAllBeds = async (req, res) => {
  try {

    const beds = await Bed.find()
      .populate({
        path: "room",
        select: "roomNumber",
        populate: {
          path: "hostel",
          select: "hostelName",
        },
      });

    res.status(200).json({
      success: true,
      count: beds.length,
      beds,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};