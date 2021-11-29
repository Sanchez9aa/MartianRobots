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

const moveForward = (robot) => {
  const isRobotLost = isLost(robot)
  if (isRobotLost) return { ...robot, lost: true };
  let newX = robot.x
  let newY = robot.y

  robot.orientation === "N" || robot.orientation === "S"
    ? newY++
    : newX++
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

const isLost = (robot) => {
  console.log("isLost", robot)
  if (robot.world.x < robot.x || robot.world.y < robot.y) {
    scent(robot)
    return true
  }
  else return false
}

const scent = (robot) => {
  console.log(robot)
  let scent
  let robotLost = {
    x: robot.x,
    y: robot.y
  }
  scent.push(robotLost)
  console.log(scent)
}


module.exports = doSequence