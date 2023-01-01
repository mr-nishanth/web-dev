import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// @desc Register a user
// @route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  //^  Check if the user is already registered
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(409);
    throw new Error("User already exists");
  }

  //^  Generate a random password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //^  Create the user
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  if (newUser) {
    return res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(500);
    throw new Error("Invalid User Data");
  }
});

// @desc Login a user/Authenticate a user
// @route POST /api/users/login
// @access Public
export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  //^  Check if the user is registered
  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // ^ Compare the user entered password with the user password
  if (user && (await bcrypt.compare(password, user.password))) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(500);
    throw new Error("Invalid User Data");
  }
});

// @desc Get User Profile
// @route GET /api/users/me
// @access Private
export const getMe = asyncHandler(async (req, res, next) => {
  // NOTE: Remember in auth middleware we set the decoded user data
  // req.user._id
  const { _id, name, email } = await User.findById(req.user._id);

  res.status(200).json({
    id: _id,
    name: name,
    email: email,
  });
});

// @desc Get all User Profile
// @route GET /api/users/all
// @access Public
export const getAll = asyncHandler(async (req, res, next) => {
  const users = await User.find({});
  res.status(200).json({
    counts: users.length,
    users,
  });
});

// ! Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
};
