import express from "express";
import { createLink, deleteLink } from "../controllers/LinkController.js";
import authMiddleWare from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleWare, createLink);
router.delete("/:id", authMiddleWare, deleteLink);

export default router;