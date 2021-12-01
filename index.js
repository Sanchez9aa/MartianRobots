const express = require("express")
const dotenv = require("dotenv")
const robotRouter = require("./routes/robotRoute")
const getRobotRouter = require("./routes/getRobots")
const lostRobotsRouter = require("./routes/lostRobots")
const aliveRobotsRouter = require("./routes/aliveRobots")
const dbConnect = require("./dbConnect")
const app = express()
dotenv.config()

const PORT = process.env.PORT
const MONGODB = process.env.MONGO_DB


dbConnect(MONGODB)

//Middlewares
app.use(express.json())
app.use("/robot/get", getRobotRouter)
app.use("/robot/lost", lostRobotsRouter)
app.use("/robot/alive", aliveRobotsRouter)
app.use("/robot", robotRouter)



app.listen(PORT || 8801, () =>{
  console.log(`Server listening at port ${PORT}`)
})