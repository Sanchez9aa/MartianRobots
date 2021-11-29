const worldLimit = (world) => {
  if (world.x < 0 || world.y < 0 || world.x > 50 || world.y > 50) return false;
  return true
}

module.exports = worldLimit
