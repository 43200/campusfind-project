const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

/* ADD REVIEW */

router.post("/add-review", async (req, res) => {

  try {

    const { collegeId, userId, userName, rating, reviewText } = req.body;

    const newReview = new Review({
      collegeId,
      userId,
      userName,
      rating,
      reviewText
    });

    await newReview.save();

    res.status(201).json(newReview);

  } catch (error) {
    res.status(500).json({ message: "Error adding review" });
  }

});


/* GET REVIEWS */

router.get("/:collegeId", async (req, res) => {

  try {

    const reviews = await Review.find({
      collegeId: req.params.collegeId
    }).sort({ createdAt: -1 });

    res.json(reviews);

  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews" });
  }

});

module.exports = router;