import express from "express";
import {
  loginUser,
  registerUser,
  setAvatar,
} from "../controllers/user.controllers.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/setAvatar/:id", setAvatar);
export default router;
