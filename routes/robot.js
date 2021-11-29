const express = require("express")
/* const {moveRigth, moveLeft, moveForward} = require("../robots") */
const World = require("../world")

const router = express.Router()

router.post("/", (req,res) => {
  const {world, robots} = req.body
  console.log(world)
  console.log(robots)

  //Check if world is between size limits
  if(!World.worldLimit(req.body.world)) return res.status(400).json({message: "World size should be lesser or 50x50", success:false})



})

module.exports = router