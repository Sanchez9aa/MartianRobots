const router = require('express').Router()
const Robot = require("../models/Robots")

//Get all robots
router.get("/", async (req, res) => {
  try {
    const robots = await Robot.find()
    res.status(200).json(robots)
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
})

//Get robots by id
router.get("/:id", async (req, res) => {
  try {
    const robots = await Robot.find({_id: req.params.id})
    res.status(200).json(robots)
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
})


module.exports = router