import express from "express";
import { getAllUsers, signUp } from "../controllers/user.controllers.js";
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/signup").post(signUp);

export default router;
