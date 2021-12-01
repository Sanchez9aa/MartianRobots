const moveRigth = (robot) => {
  if (robot.lost) return robot;
  let newOrientation
  switch (robot.orientation) {
    case "N":
      return newOrientation = { ...robot, orientation: "E" }
    case "E":
      return newOrientation = { ...robot, orientation: "S" }
    case "S":
      return newOrientation = { ...robot, orientation: "W" }
    case "W":
      return newOrientation = { ...robot, orientation: "N" }
    default:
      return robot.orientation
  }
}

const moveLeft = (robot) => {
  if (robot.lost) return robot;
  let newOrientation
  switch (robot.orientation) {
    case "N":
      return newOrientation = { ...robot, orientation: "W" }
    case "E":
      return newOrientation = { ...robot, orientation: "N" }
    case "S":
      return newOrientation = { ...robot, orientation: "E" }
    case "W":
      return newOrientation = { ...robot, orientation: "S" }
  }
}

const scent = (robot) => {
  let scent = []
  let robotLost = {
    x: robot.x,
    y: robot.y
  }
  scent.push(robotLost)
  return scent
}

var scentCoord

const moveForward = (robot) => {

  //Check if robot is lost, if it is we return that robot is lost, also we get the coordinates for our scent
  const isRobotLost = isLost(robot)
  
  if (isRobotLost){
    scentCoord = scent(robot)
    return { ...robot, lost: true };
  } 
  //If we got an scent we chek that robot got that coordinate -1.
  if(scentCoord === undefined){
    null
  }else{
    //If scent -1 is same that the robot coords we return that robot to prevent the lost
    if(!scentCoord.some(x => (((x.x - 1 ) === robot.x && x.y === robot.y) || (x.x === robot.x && (x.y - 1) === robot.y)))){
      null
    }else{
      return robot
    }
  } 
  let newX = robot.x
  let newY = robot.y

  robot.orientation === "N"
  ? newY++
  : robot.orientation === "E"
  ? newX++
  : robot.orientation === "S"
  ? newY--
  : newX--

  return { ...robot, x: newX, y: newY }
}

const doSequence = (sequence, robot) => {
  let changeRobot = robot
  sequence.forEach(x => {
    switch (x) {
      case "L":
        changeRobot = moveLeft(changeRobot)
        break;
      case "R":
        changeRobot = moveRigth(changeRobot)
        break;
      case "F":
        changeRobot = moveForward(changeRobot)
        break;
      default:
        changeRobot
    }
  })
  return changeRobot
}


//If robot is lost we execute the scent function to capture that coords
const isLost = (robot) => {
  if (robot.world.x < robot.x || robot.world.y < robot.y) {
    scent(robot)
    return true
  }
  else return false
}




module.exports = {doSequence, moveForward, moveLeft, moveRigth, isLost, scent} 