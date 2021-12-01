const mongoose = require("mongoose")


const dbConnect = (MONGODB) => {
  mongoose.connect(MONGODB)
  .then(() => console.log("Connection to database done")) 
  .catch((err) => console.log(err))
} 

module.exports = dbConnect