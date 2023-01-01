import expressAsyncHandler from "express-async-handler";

// @desc Get goals
// @route GET /api/goals
// @access Private
export const getGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Your Goals" });
});
// @desc Set goal
// @route POST /api/goals
// @access Private
export const createGoals = expressAsyncHandler(async (req, res) => {
  res.status(201).json({ message: "Create Goals" });
});
// @desc update goal
// @route PUT /api/goals/:id
// @access Private
export const updateGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
});
// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
export const deleteGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Goals ${req.params.id}` });
});
