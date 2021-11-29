
const moveRigth = (robot) => {
  if (robot.lost) return;
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
  }
}

const moveLeft = (robot) => {
  if (robot.lost) return;
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
  if (robot.lost) return;
  const newX = robot.x  
  const newY = robot.y

  robot.orientation === "N" || "S" 
  ? newY++
  : newX++

  return {...robot, x: newX, y: newY}
}

module.exports = {moveRigth, moveLeft, moveForward}