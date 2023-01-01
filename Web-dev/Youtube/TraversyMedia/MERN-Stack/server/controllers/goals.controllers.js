import dbAsyncHandler from "express-async-handler";
import Goal from "../models/goal.model.js";

// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = dbAsyncHandler(async (req, res) => {
  const goals = await Goal.find().lean();
  return res.status(200).json({ status: true, goals });
});
// @desc Set goal
// @route POST /api/goals
// @access Private
export const createGoals = dbAsyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text message");
  }
  const goal = await Goal.create({ text: req.body.text });
  await goal.save();
  return res.status(201).json({ status: true, goal });
});
// @desc update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoals = dbAsyncHandler(async (req, res) => {
  const goalID = await Goal.findById(req.params.id);
  if (!goalID) {
    res.status(404);
    throw new Error("Goal not found");
  }

  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text message");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );
  await updatedGoal.save();
  return res.status(200).json({ status: true, updatedGoal });
});
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoals = dbAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  await goal.remove();
  return res.status(200).json({ status: true, id: req.params.id });
});
