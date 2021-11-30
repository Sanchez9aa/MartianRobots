const {moveRigth, moveForward, moveLeft, isLost, doSequence, scent} = require("./robot")
const {robot} = require("../test/helper")

describe("MoveLeft Robot function", () => {
  test("Should change orientation to the left one N to W {N:W, W:S, S:E, E:N}", () => {
    let useRobot = robot(10, 10, "N", false, {x: 50, y: 50})
    let modifiedRobot = moveLeft(useRobot)
    expect(modifiedRobot.orientation).toBe("W")
  })

  test("Should change orientation to the left one W to S {N:W, W:S, S:E, E:N}", () => {
    let useRobot = robot(10, 10, "W", false, {x: 50, y: 50})
    let modifiedRobot = moveLeft(useRobot)
    expect(modifiedRobot.orientation).toBe("S")
  })

  test("Should change orientation to the left one S to E {N:W, W:S, S:E, E:N}", () => {
    let useRobot = robot(10, 10, "S", false, {x: 50, y: 50})
    let modifiedRobot = moveLeft(useRobot)
    expect(modifiedRobot.orientation).toBe("E")
  })

  test("Should change orientation to the left one E to N {N:W, W:S, S:E, E:N}", () => {
    let useRobot = robot(10, 10, "E", false, {x: 50, y: 50})
    let modifiedRobot = moveLeft(useRobot)
    expect(modifiedRobot.orientation).toBe("N")
  })
})

describe("MoveRigth Robot function", () => {
  test("Should change orientation to the rigth one N to E {N:E, E:S, S:W, W:N}", () => {
    let useRobot = robot(10, 10, "N", false, {x: 50, y: 50})
    let modifiedRobot = moveRigth(useRobot)
    expect(modifiedRobot.orientation).toBe("E")
  })

  test("Should change orientation to the rigth one E to S {N:E, E:S, S:W, W:N}", () => {
    let useRobot = robot(10, 10, "E", false, {x: 50, y: 50})
    let modifiedRobot = moveRigth(useRobot)
    expect(modifiedRobot.orientation).toBe("S")
  })

  test("Should change orientation to the rigth one S to W {N:E, E:S, S:W, W:N}", () => {
    let useRobot = robot(10, 10, "S", false, {x: 50, y: 50})
    let modifiedRobot = moveRigth(useRobot)
    expect(modifiedRobot.orientation).toBe("W")
  })

  test("Should change orientation to the rigth one W to N {N:E, E:S, S:W, W:N}", () => {
    let useRobot = robot(10, 10, "W", false, {x: 50, y: 50})
    let modifiedRobot = moveRigth(useRobot)
    expect(modifiedRobot.orientation).toBe("N")
  })
})

describe("MoveForward Robot function", () => {
  test("If out of world size should return that is lost and should return the same coords ", () => {
    let useRobot = robot(10, 60, "N", false, {x: 50, y: 50})
    let modifiedRobot = moveForward(useRobot)
    expect(modifiedRobot.lost).toBe(true)
    expect(modifiedRobot.x).toBe(10)
    expect(modifiedRobot.y).toBe(60)
  })

  test("Should change orientation to the forward coords N {N:+Y, E:+X, S:-Y, W:-X}", () => {
    let useRobot = robot(10, 10, "N", false, {x: 50, y: 50})
    let modifiedRobot = moveForward(useRobot)
    expect(modifiedRobot.y).toBe(11)
  })

  test("Should change orientation to the forward coords E {N:+Y, E:+X, S:-Y, W:-X}", () => {
    let useRobot = robot(10, 10, "E", false, {x: 50, y: 50})
    let modifiedRobot = moveForward(useRobot)
    expect(modifiedRobot.x).toBe(11)
  })

  test("Should change orientation to the forward coords S {N:+Y, E:+X, S:-Y, W:-X}", () => {
    let useRobot = robot(10, 10, "S", false, {x: 50, y: 50})
    let modifiedRobot = moveForward(useRobot)
    expect(modifiedRobot.y).toBe(9)
  })

  test("Should change orientation to the forward coords W {N:+Y, E:+X, S:-Y, W:-X}", () => {
    let useRobot = robot(10, 10, "W", false, {x: 50, y: 50})
    let modifiedRobot = moveForward(useRobot)
    expect(modifiedRobot.x).toBe(9)
  })
})

describe("DoSecuence Robot function", () => {
  test("Two Forward sequence in N orientation should change our y coordinate by +2", () => {
    let useRobot = robot(10, 10, "N", false, {x: 50, y: 50})
    let modifiedRobot = doSequence(["F", "F"], useRobot)
    expect(modifiedRobot.y).toBe(12)
  })

  test("Two Forward sequence in W orientation should change our x coordinate by -2", () => {
    let useRobot = robot(10, 10, "W", false, {x: 50, y: 50})
    let modifiedRobot = doSequence(["F", "F"], useRobot)
    expect(modifiedRobot.x).toBe(8)
  })

  test("Two Forward sequence in S orientation should change our y coordinate by -2", () => {
    let useRobot = robot(10, 10, "S", false, {x: 50, y: 50})
    let modifiedRobot = doSequence(["F", "F"], useRobot)
    expect(modifiedRobot.y).toBe(8)
  })

  test("Two Forward sequence in E orientation should change our x coordinate by +2", () => {
    let useRobot = robot(10, 10, "E", false, {x: 50, y: 50})
    let modifiedRobot = doSequence(["F", "F"], useRobot)
    expect(modifiedRobot.x).toBe(12)
  })

  test("F, R, F should return x + 1 and y + 1 on coordinates and E orientation if we start with N orientation", () => {
    let useRobot = robot(10, 10, "N", false, {x: 50, y: 50})
    let modifiedRobot = doSequence(["F", "R", "F"], useRobot)
    expect(modifiedRobot.y).toBe(11)
    expect(modifiedRobot.x).toBe(11)
    expect(modifiedRobot.orientation).toBe("E")
  })
  
})