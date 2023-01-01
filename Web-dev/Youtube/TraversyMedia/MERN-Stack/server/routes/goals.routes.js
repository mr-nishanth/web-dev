import express from "express";
import {
  createGoals,
  deleteGoals,
  getGoals,
  updateGoals,
} from "../controllers/goals.controllers.js";
const router = express.Router();

router.route("/").get(getGoals).post(createGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

export default router;
