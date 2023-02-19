import express from "express";
const router = express.Router();
import * as auth from "../controllers/auth.controllers.js";
router.post("/register", auth.register);
export default router;
