import express from "express";
import {
  createGoals,
  deleteGoals,
  getGoals,
  updateGoals,
} from "../controllers/goals.controllers.js";
const router = express.Router();
import { protect } from "../middleware/auth.middleware.js";
router.route("/").get([protect, getGoals]).post([protect, createGoals]);
router.route("/:id").put([protect, updateGoals]).delete([protect, deleteGoals]);

export default router;
