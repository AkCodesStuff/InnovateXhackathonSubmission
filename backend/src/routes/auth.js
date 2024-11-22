import express from 'express'
import { login,logout,signup,updateProfile,checkAuth} from '../controllers/auth.js'
import {questionRead} from '../controllers/question.js' 
import { authenticateToken } from '../middleware/authware.js'
const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.put("/update",authenticateToken,updateProfile)
router.get("/check", authenticateToken, checkAuth)
router.get("/question",authenticateToken,questionRead)

export default router

