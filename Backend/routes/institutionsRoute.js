const express = require("express");
const router = express.Router();
const Institution = require("../models/institution");

/* GET all institutions */
router.get("/", async (req, res) => {
  try {
    const { type, domain, location, minRating, maxFees } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (domain) filter.domain = { $in: [domain] };
    if (location) filter.location = location;
    if (minRating) filter.rating = { $gte: Number(minRating) };
    if (maxFees) filter.fees = { $lte: Number(maxFees) };

    const institutions = await Institution.find(filter);

    res.json(institutions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* GET institution by ID */
router.get("/:id", async (req, res) => {
  try {

    const institution = await Institution.findById(req.params.id);

    if (!institution) {
      return res.status(404).json({ message: "Institution not found" });
    }

    res.json(institution);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* POST new institution */
router.post("/", async (req, res) => {
  try {

    const institution = new Institution(req.body);

    const savedInstitution = await institution.save();

    res.status(201).json(savedInstitution);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/* DELETE institution */
router.delete("/:id", async (req, res) => {
  try {

    await Institution.findByIdAndDelete(req.params.id);

    res.json({ message: "Institution deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;