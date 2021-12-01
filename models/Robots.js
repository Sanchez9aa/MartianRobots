const mongoose = require("mongoose")

const {Schema, model} = mongoose

const RobotSchema = new Schema({
  x: {type: Number, required: true},
  y: {type: Number, required: true},
  orientation: {type: String, required: true},
  lost: {type: Boolean, required: true}
})

module.exports = model("Robot", RobotSchema)