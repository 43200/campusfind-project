const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* TEST ROUTE */
router.get("/test", (req, res) => {
  res.send("User route working");
});

router.post("/update-name", async (req, res) => {

  try {

    const { userId, name } = req.body;

    await User.findByIdAndUpdate(userId, { name });

    res.json({ message: "Name updated" });

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }

});
/* SAVE COLLEGE */
router.post("/save-college", async (req, res) => {
  try {
    const { userId, collegeId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.savedColleges) {
      user.savedColleges = [];
    }

    const alreadySaved = user.savedColleges.some(
      id => id.toString() === collegeId
    );

    if (!alreadySaved) {
      user.savedColleges.push(collegeId);
      await user.save();
    }

    res.json({ message: "College saved successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

/* REMOVE COLLEGE */
router.post("/remove-college", async (req, res) => {
  try {
    const { userId, collegeId } = req.body;

    const user = await User.findById(userId);

    user.savedColleges = user.savedColleges.filter(
      id => id.toString() !== collegeId
    );

    await user.save();

    res.json({ message: "College removed successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* GET USER PROFILE */
router.get("/profile/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate("savedColleges");

    res.json(user);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;