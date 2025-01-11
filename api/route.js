
import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.routes.js"

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://riken9377:yadayada@ublog.zkpy8.mongodb.net/UBlog").then(() => {
  console.log("Database is connected")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")  
})

app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

