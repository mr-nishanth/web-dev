import express from "express";
import {
  getAll,
  getMe,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js   ";
import { protect } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", [protect, getMe]);
router.get("/all", [getAll]);

export default router;
