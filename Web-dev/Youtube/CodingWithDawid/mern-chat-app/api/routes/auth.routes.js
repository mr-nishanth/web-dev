import express from "express";
const router = express.Router();
import * as auth from "../controllers/auth.controllers.js";
router.post("/register", auth.register);
router.get("/profile", auth.profile);
export default router;
