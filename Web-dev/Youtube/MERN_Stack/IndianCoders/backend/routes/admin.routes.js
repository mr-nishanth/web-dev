import express from "express";
import { login, signUp } from "../controllers/admin.controllers.js";
const router = express.Router();
router.route("/signup").post(signUp);
router.route("/login").post(login);
export default router;
