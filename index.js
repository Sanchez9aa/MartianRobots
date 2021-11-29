const express = require("express")
const dotenv = require("dotenv")
const robotRouter = require("./routes/robot")
const app = express()
dotenv.config()

const PORT = process.env.PORT

//Middlewares
app.use(express.json())
app.use("/robot", robotRouter)

app.listen(PORT || 8801, () =>{
  console.log(`Server listening at port ${PORT}`)
})