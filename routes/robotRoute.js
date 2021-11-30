const {doSequence} = require("../robots/robot")
const worldLimit = require("../world/world")

const robotRouter = (req,res) => {

  const {world, robots} = req.body

  //Check if robot is one array
  if(!Array.isArray(robots)) return res.status(400).json({message: "Need to send yours robots as array.", success:false})

  //Check if robots are being sent
  if(robots.length === 0) return res.status(400).json({message: "Need to send at least one robot.", success:false})

  //Check if world is between size limits
  if(!worldLimit(world)) return res.status(400).json({message: "World size should be lesser or 50x50 and as minimun 0x0", success:false})

  //Check if instruction is less than 100 characters
  const checkSequenceLength = robots.map(x => {
    if (x.sequence.length > 100) return true
    else return false
  })
  if (checkSequenceLength.includes(true)) return res.status(400).json({message: "This robot model do not allow more than 100 instructions.", success:false})  
  
  //Check if robot start is out of world size
  const checkRobotStart = robots.map(x => {
    if(x.start.x > world.x || x.start.y > world.y) return true
    else return false
  })
  if(checkRobotStart.includes(true)) return res.status(400).json({message: "Change start position options, we can not launch that robot to lost it!!!!!", success:false})

  //Check is some sequence is invalid
  const checkSequence = robots.map(x => {
    const check = x.sequence.map(x => {
      if(x === "F" || x === "R" || x === "L" ) return true
      else return false
    })
    console.log(check)
    if(check === true) return false
    else return true
  })
  if(checkSequence.includes(true)) return res.status(400).json({message: "There are some sequences that this robot do not recognize, check the model one and follow the instructions.", success:false})
  
  //Now that we have handle some posible errors we send robots separated with the sequences
  try{
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
    
    //Now that we got a position with the world size separate the info that we are searching for
    const response = robotPosition.map(({world, ...other}) => other)

    //If there is no problem we send our robot or robots position
    res.status(200).json(response)
    
  }catch(err){
    res.status(500).json(err)
  }
}

module.exports = robotRouter