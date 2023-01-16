import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.model.js";
import { generateToken } from "../middleware/jwtToken.js";
import { validateID } from "../utils/validateMongoDBID.js";
import { generateRefreshToken } from "../middleware/refreshToken.js";

// !=================================================================================
export const registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(
    `\n \t\t\t\t\t 🔔🔔 Register User 🔔🔔 
    \n ${JSON.stringify(req.body)}\n `
  );

  try {
    //^ Check if the user is already registered
    const isExistUsername = await User.findOne({ username }).lean();
    const isExistEmail = await User.findOne({ email }).lean();
    if (isExistUsername)
      return res.json({ msg: "Username already used", status: false });
    if (isExistEmail)
      return res.json({ msg: "Email already used", status: false });

    //^ Register new user
    let newUser = new User({ username, email, password });
    newUser = await newUser.save();

    delete newUser.password;
    return res.status(201).json({ user: newUser, status: true });
  } catch (error) {
    next(error);
  }
});
