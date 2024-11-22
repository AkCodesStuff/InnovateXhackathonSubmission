import express from "express"
import authRoutes from './routes/auth.js'
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js"
import cookieParser from 'cookie-parser'
import mentorRoutes from './routes/mentorMessage.js'
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/mentorMessage",mentorRoutes)
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}....`);
    connectDB()
})