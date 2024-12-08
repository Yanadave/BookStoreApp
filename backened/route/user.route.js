// route define krne ke liye sabse phle humare pass express hona chahiye
import express from "express";
import {signup, login} from "../controller/user.controller.js"

const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)

export default router; 