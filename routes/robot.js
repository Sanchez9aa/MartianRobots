const express = require("express")
const doSequence = require("../robots")
const worldLimit = require("../world")

const router = express.Router()

router.post("/", (req,res) => {
  const {world, robots} = req.body

  //Check if robot is one array
  if(!Array.isArray(robots)) return res.status(400).json({message: "Need to send yours robots as array", success:false})

  //Check if robots are being sent
  if(robots.length === 0) return res.status(400).json({message: "Need to send at least one robot", success:false})

  //Check if world is between size limits
  if(!worldLimit(world)) return res.status(400).json({message: "World size should be lesser or 50x50", success:false})

  //Check if instruction is less than 100 characters
  robots.map(x => {
    if(x.sequence.length > 100) return res.status(400).json({message: "This robot model do not allow more than 100 instructions.", success:false})  
  })

  //Check if robot start is out of world size
  robots.map(x=>{
    if(x.start.x > world.x || x.start.y > world.y) return res.status(400).json({message: "Change start position options, we can not launch that robot to lost it!!!!!", success:false})  
  })
  
  try{
    console.log('hola')
    const robotPosition = robots.map(x => {
      let robot = {
        x: x.start.x,
        y: x.start.y,
        orientation: x.start.orientation,
        lost: false,
        world: world
      }
      return doSequence(x.sequence, robot)
    })
    
    !robotPosition.lost 
      ? res.status(200).json(robotPosition)
      : res.status(200).json(`${robotPosition} LOST`)
    
  }catch(err){
    res.status(500).json(err)
  }
})

module.exports = router