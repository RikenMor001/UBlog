
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGOOSE).then(() => {
  console.log("Database is connected")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")  
})
