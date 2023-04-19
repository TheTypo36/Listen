import express from "express";
import { signIn, signUp } from "../controllers/index.js";
const router = express.Router();
console.log("user routes loaded");
router.get("/sign-in", signIn);

router.get("/sign-up", signUp);

export default router;
