import express from "express";
import { register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register)

router.get
export default router;