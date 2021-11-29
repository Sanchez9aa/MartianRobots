const worldLimit = (world) => {
  console.log(world)
  if (world.x < 0 || world.y < 0 || world.x > 50 || world.y > 50) return false;
  return true
}

const isLost = (robot, world) => {
  if(world.x < robot.x || world.y < robot.y) return true
  return false
}

exports.worldLimit = worldLimit
exports.isLost = isLost