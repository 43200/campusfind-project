const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  collegeId: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  userName: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  reviewText: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Review", reviewSchema);