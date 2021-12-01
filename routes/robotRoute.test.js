const robotRoute = require("./robotRoute")
const {post} = require("../test/helper")

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe.skip("Handle invalid cases", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })
  
  test("Robot should be an array", async () => {
    let useRobot = post({ x: 50, y: 50 }, {})
    robotRoute(useRobot, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message:"Need to send yours robots as array.", success:false
    })
  })

  test("Sending 0 robot should give error", async () => {
    let useRobot = post({ x: 50, y: 50 }, [])
    robotRoute(useRobot, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message:"Need to send at least one robot.", success:false
    })
  })

  test("Sending a world oversizing world limit should give error", async () => {
    let useRobot = post({ x: 60, y: 50 }, [{
      "start": {
        "x": 3,
        "y": 30,
        "orientation": "N"
      },
      "sequence": ["F", "R"]
    }])
    robotRoute(useRobot, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message:"World size should be lesser or 50x50 and as minimun 0x0", success:false
    })
  })

  test("Sending a world oversizing world limit should give error", async () => {
    let useRobot = post({ x: -4, y: 50 }, [{
      "start": {
        "x": 3,
        "y": 30,
        "orientation": "N"
      },
      "sequence": ["F", "R"]
    }])
    robotRoute(useRobot, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message:"World size should be lesser or 50x50 or as minimun 0x0", success:false
    })
  })

  test("Sending more than 100 sequences should return error", async () => {
    let useRobot = post({ x: 50, y: 50 }, [{
      "start": {
        "x": 3,
        "y": 30,
        "orientation": "N"
      },
      "sequence": ["F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R", "F", "R"]
    }])
    robotRoute(useRobot, res)
    console.log(res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message:"This robot model do not allow more than 100 instructions.", success:false
    })
  })

  test("Robot start position out of world coords should return an error", async () => {
    let useRobot = post({ x: 30, y: 30 }, [{
      "start": {
        "x": 3,
        "y": 40,
        "orientation": "N"
      },
      "sequence": ["F", "R"]
    }])
    robotRoute(useRobot, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message:"Change start position options, we can not launch that robot to lost it!!!!!", success:false
    })
  })

  test("If any sequence is invalid should return error", async () => {
    let useRobot = post({ x: 30, y: 30 }, [{
      "start": {
        "x": 3,
        "y": 20,
        "orientation": "N"
      },
      "sequence": ["F", "X"]
    }])
    robotRoute(useRobot, res)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({
      message:"There are some sequences that this robot do not recognize, check the model one and follow the instructions.", success:false
    })
  })

})

describe.skip("Handle robots cases", () =>{
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test.skip("One robot with x:3 y:4 with the sequences [F,F,F,F] and orientation E should return x:7 y:4", () => {
    let useRobot = post({ x: 50, y: 50 }, [{
      "start": {
        "x": 3,
        "y": 4,
        "orientation": "E"
      },
      "sequence": ["F", "F", "F", "F"]
    }])
    robotRoute(useRobot, res)
    expect(res.json).toHaveBeenCalledWith(
      [
        {
          x: 7,
          y: 4,
          orientation: "E",
          lost: false
        }
      ]
    )
  })

  test.skip("Two robots one with x:3 y:4 with the sequences [F,F,F,F] and orientation E should return x:7 y:4 and the last with x:3 y:4 with the sequences [F,F,F,F] and orientation N should return x:3 y:8", () => {
    let useRobot = post({ x: 50, y: 50 }, [{
      "start": {
        "x": 3,
        "y": 4,
        "orientation": "E"
      },
      "sequence": ["F", "F", "F", "F"]
    },
    {
      "start": {
        "x": 3,
        "y": 4,
        "orientation": "N"
      },
      "sequence": ["F", "F", "F", "F"]
    }])
    robotRoute(useRobot, res)
    expect(res.json).toHaveBeenCalledWith(
      [
        {
          x: 7,
          y: 4,
          orientation: "E",
          lost: false
        },
        {
          x: 3,
          y: 8,
          orientation: "N",
          lost: false
        }
      ]
    )
  })

  test.skip("One robot with x: 48 y:30 with world size 50x50 with orientation E and sequence [F,F,F,F] should return x:51 y:30 and lost:true", () => {
    let useRobot = post({ x: 50, y: 50 }, [{
      "start": {
        "x": 48,
        "y": 30,
        "orientation": "E"
      },
      "sequence": ["F", "F", "F", "F"]
    }])
    robotRoute(useRobot, res)
    expect(res.json).toHaveBeenCalledWith(
      [
        {
          x: 51,
          y: 30,
          orientation: "E",
          lost: true
        }
      ]
    )
  })

  test("Two robots with x:30 y:49 with world size 50x50 with orientation W and sequence [R,F,F,F] should return x:30 y:51 and lost:true but the last one should return x:30 y:50 and lost:false thanks to scent", () => {
    let useRobot = post({ x: 50, y: 50 }, [{
      "start": {
        "x": 30,
        "y": 49,
        "orientation": "W"
      },
      "sequence": ["R", "F", "F", "F"]
    },
    {
      "start": {
        "x": 30,
        "y": 49,
        "orientation": "W"
      },
      "sequence": ["R", "F", "F", "F"]
    }])
    robotRoute(useRobot, res)
    expect(res.json).toHaveBeenCalledWith(
      [
        {
          x: 30,
          y: 51,
          orientation: "N",
          lost: true
        },
        {
          x: 30,
          y: 50,
          orientation: "N",
          lost: false
        }
      ]
    )
  })


})

describe("Handle document cases", () =>{
  beforeEach(() => {
    jest.clearAllMocks();
  })

  /* In the code-challenge that output are diferents.
    This is because this code treats every time a robot is lost as a robot that cannot be accessed and once it is lost, no more sequences can be sent to it.
  */

  test("", () => {
    let useRobot = post({ x: 5, y: 3 }, [{
      "start": {
        "x": 1,
        "y": 1,
        "orientation": "E"
      },
      "sequence": ["R", "F", "R", "F", "R", "F", "R", "F"]
    },{
      "start": {
        "x": 3,
        "y": 2,
        "orientation": "N"
      },
      "sequence": ["F", "R", "R", "F", "L", "L", "F", "F", "R", "R", "F", "L", "L"]
    },{
      "start": {
        "x": 0,
        "y": 3,
        "orientation": "W"
      },
      "sequence": ["L", "L", "F", "F", "F", "R", "F", "L", "F", "L"]
    }])
    robotRoute(useRobot, res)
    expect(res.json).toHaveBeenCalledWith(
      [
        {
          x: 1,
          y: 1,
          orientation: "E",
          lost: false
        },
        {
          x: 3,
          y: 4,
          orientation: "S",
          lost: true
        },
        {
          x: 3,
          y: 3,
          orientation: "N",
          lost: false
        }
      ]
    )
  })
})