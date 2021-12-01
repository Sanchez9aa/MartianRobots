const router = require("express").Router()

router.get("/", async (req, res) => {
  try {
    res.status(200).json("Go to https://github/sanchez9aa/MartianRobots if you want to know how this api works")
  } catch (err) {
    res.status(500).json({ message: err, success: false });
  }
})

module.exports = router