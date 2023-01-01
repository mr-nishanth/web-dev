import dbAsyncHandler from "express-async-handler";
import Goal from "../models/goal.model.js";
import User from "../models/user.model.js";

// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = dbAsyncHandler(async (req, res) => {
  // req.user.id came from auth middleware verification.
  const goals = await Goal.find({ user: req.user.id }).lean();
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
  const goal = await Goal.create({ user: req.user.id, text: req.body.text });
  await goal.save();
  return res.status(201).json({ status: true, goal });
});
// @desc update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoals = dbAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  if (!req.body.text) {
    res.status(400);
    throw new Error("Please provide a text message");
  }

  //^ Update
  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Ensure that the goal user matches the current user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User Not Authenticate");
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
  console.log(`User ${req.user._id}`);
  console.log(`Goal ${goal}`);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // ^ Delete
  const user = await User.findById(req.user.id);
  console.log(`Delete User ${user}`);

  // Check for user
  if (!user) {
    // res.status(404);
    // throw new Error("User not found");
    res.status(401);
    throw new Error("Not Authenticate");
  }

  // Ensure that the goal user matches the current user
  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User Not Authenticate");
  }

  await goal.remove();
  return res.status(200).json({ status: true, id: req.params.id });
});
