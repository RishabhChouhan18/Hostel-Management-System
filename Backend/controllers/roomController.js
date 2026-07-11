const Room = require("../models/Room");
const Hostel = require("../models/Hostel");

// Create Room
exports.createRoom = async (req, res) => {
  try {
    const { roomNumber, floor, roomType, capacity, hostelId } = req.body;

    // Check hostel belongs to logged in admin
    const hostel = await Hostel.findOne({
      _id: hostelId,
      createdBy: req.user._id,
    });

    if (!hostel) {
      return res.status(404).json({
        success: false,
        message: "Hostel not found",
      });
    }

    // Check duplicate room
    const roomExists = await Room.findOne({
      roomNumber,
      hostel: hostelId,
    });

    if (roomExists) {
      return res.status(400).json({
        success: false,
        message: "Room already exists in this hostel",
      });
    }

    const room = await Room.create({
      roomNumber,
      floor,
      roomType,
      capacity,
      hostel: hostelId,
    });

    res.status(201).json({
      success: true,
      message: "Room Created Successfully",
      room,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find()
      .populate("hostel", "hostelName");

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get room by id
exports.getRoomById = async (req, res) => {
  try {

    const room = await Room.findById(req.params.id)
      .populate("hostel", "hostelName");

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      room,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//update room
exports.updateRoom = async (req, res) => {
  try {

    const room = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room Updated Successfully",
      room,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Delete Room
exports.deleteRoom = async (req, res) => {
  try {

    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};