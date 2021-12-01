const router = require('express').Router()
const Robot = require("../models/Robots")

//Get lost robots

router.get("/", async (req, res) => {
  try {
    const robots = await Robot.findOne({lost: true})
    res.status(200).json(robots)
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
})

module.exports = router