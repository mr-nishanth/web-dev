const User = require("../models/user.model");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

/**
 * @description Register a new user
 * @param {/api/v1/register} req
 * @param {*} res
 * @param {*} next
 */
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  console.log("req.body", req.body);
  const { name, email, password, avatar } = req.body;

  //   check if user already exists in the database by email address and return error if it does exist in the database already

  const user = await User.create({ name, email, password, avatar });
  res.status(201).json({ success: true, user });
});
