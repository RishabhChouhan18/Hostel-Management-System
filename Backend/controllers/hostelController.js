const Hostel = require("../models/Hostel");

// Create Hostel
exports.createHostel = async (req, res) => {
  try {
    const { hostelName, address, description } = req.body;

    const hostel = await Hostel.create({
      hostelName,
      address,
      description,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Hostel created successfully",
      hostel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get Hostel By ID
exports.getHostelById = async (req, res) => {
  try {
    const hostel = await Hostel.findOne({
      _id: req.params.id,
      createdBy: req.user._id,
    }).populate("createdBy", "name email");

    if (!hostel) {
      return res.status(404).json({
        success: false,
        message: "Hostel not found",
      });
    }

    res.status(200).json({
      success: true,
      hostel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Hostel
exports.updateHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!hostel) {
      return res.status(404).json({
        success: false,
        message: "Hostel not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hostel updated successfully",
      hostel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Hostel
exports.deleteHostel = async (req, res) => {
  try {
    const hostel = await Hostel.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });

    if (!hostel) {
      return res.status(404).json({
        success: false,
        message: "Hostel not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hostel deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};