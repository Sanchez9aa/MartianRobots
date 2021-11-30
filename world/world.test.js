const worldLimit = require("./world")
const {post} = require("../test/helper")

describe("World size checkout", () => {
  test("Should return true if a world size is between 0x0 and 50x50", () => {
    let useRobot = post({x:8, y:50}, [])
    let modifiedRobot = worldLimit(useRobot.body.world)
    expect(modifiedRobot).toBe(true)
  })
})