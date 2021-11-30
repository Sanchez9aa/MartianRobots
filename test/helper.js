const robot = (x, y, o, l, w) => {
  useRobot = {
    x: x,
    y: y,
    orientation: o,
    lost: l,
    world: w
  }
  return useRobot
}

const post = (w, r) => {
  useRobot = {
    body:{
      world: w,
      robots: r
    }
  }
  return useRobot
}

module.exports = {robot, post}