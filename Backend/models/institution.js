const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ["UG", "PG", "Study Abroad"],
    required: true
  },

  domain: [String],

  accreditation: String,

  location: String,

  fees: Number,

  rating: Number,

  highestPackage: Number,

  averagePackage: Number,

  courses: [String],

  description: String,

  website: String,

  applyLink: String

});

module.exports = mongoose.model("Institution", institutionSchema);