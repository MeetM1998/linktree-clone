import express from "express";
import { getProfile } from "../controllers/UserController.js";
import authMiddleWare from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleWare, getProfile);

export default router;