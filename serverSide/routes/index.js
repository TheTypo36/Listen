import express from "express";
import { home } from "../controllers/index.js";
import user from "./user.js";
import song from './song.js';
console.log("router loaded");
const router = express.Router();

router.get("/", home);

router.use("/user", user);
router.use("/song", song);
export default router;
