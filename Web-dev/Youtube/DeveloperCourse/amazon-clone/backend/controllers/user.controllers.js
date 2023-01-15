import User from "../models/User.model.js";

import asyncHandler from "express-async-handler";

import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/jwtToken.js";
export const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(
    `\n 🔔🔔 Register User 🔔🔔 
    \n ${JSON.stringify(req.body)}\n `
  );
  //^ Check if the user is already registered
  const isExisting = await User.findOne({ email }).lean();
  if (!isExisting) {
    // Create a new user
    let newUser = new User(req.body);
    newUser = await newUser.save();
    return res.status(201).json({ newUser, success: true });
  } else {
    throw new Error("User already registered");
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(`Login User \n ${JSON.stringify(req.body)}\n `);
  //^ Check if the user is exists or not
  const isExisting = await User.findOne({ email });

  // ^ Check if the user is exists as well as password is correct
  console.log(
    `\n 🔔🔔 LOGIN STATUS 🔔🔔 \n 
    USER CHECK ${isExisting ? "true" : "false"} \n
    PASSWORD CHECK ${await isExisting.isPasswordMatched(password)}`
  );
  if (isExisting && (await isExisting.isPasswordMatched(password))) {
    return res.status(200).json({
      _id: isExisting.id,
      firstname: isExisting?.firstname,
      lastname: isExisting?.lastname,
      email: isExisting?.email,
      mobile: isExisting?.mobile,
      token: generateToken(isExisting.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});
