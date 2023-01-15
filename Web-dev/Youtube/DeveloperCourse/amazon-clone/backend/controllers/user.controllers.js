import User from "../models/User.model.js";

import asyncHandler from "express-async-handler";

import { generateToken } from "../middleware/jwtToken.js";
import { validateID } from "../utils/validateMongoDBID.js";
export const registerUser = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(
    `\n \t\t\t\t\t 🔔🔔 Register User 🔔🔔 
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
  console.log(
    `\n \t\t\t\t\t 🔔🔔 Login User 🔔🔔  \n ${JSON.stringify(req.body)}\n `
  );
  //^ Check if the user is exists or not
  const isExisting = await User.findOne({ email });

  // ^ Check if the user is exists as well as password is correct
  const passwordCheck = await isExisting.isPasswordMatched(password);
  console.log(
    `\n ⚠️⚠️ LOGIN STATUS ⚠️⚠️  \n 
    USER CHECK ${isExisting ? "true" : "false"} \n
    PASSWORD CHECK ${passwordCheck} \n`
  );
  if (isExisting && passwordCheck) {
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
export const getAllUser = asyncHandler(async (req, res) => {
  console.log(`\n \t\t\t\t\t 🔔🔔 Get All User 🔔🔔  \n `);
  try {
    const getUsers = await User.find().lean();
    return res.status(200).json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});
export const getOneUser = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  const { _id: id } = req?.user;
  //^ Validate the user ID
  // validateID(id);
  console.log(`\n \t\t\t\t\t 🔔🔔 Get One User ID : ${id}🔔🔔  \n`);
  try {
    const getUser = await User.findById(id).lean();
    return res.status(200).json(getUser);
  } catch (error) {
    throw new Error(error);
  }
});

export const updatedUser = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  const { _id: id } = req?.user;
  //^ Validate the user ID
  validateID(id);
  console.log(`\n \t\t\t\t\t 🔔🔔 Update User | ID : ${id}🔔🔔  \n`);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      { new: true }
    );
    return res.status(200).json({ updatedUser });
  } catch (error) {
    throw new Error(error);
  }
});
export const deleteUser = asyncHandler(async (req, res) => {
  // const { id } = req.params;
  const { _id: id } = req?.user;
  //^ Validate the user ID
  validateID(id);
  console.log(`\n \t\t\t\t\t 🔔🔔 Delete User | ID : ${id}🔔🔔  \n`);
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    return res.status(200).json({ deleteUser });
  } catch (error) {
    throw new Error(error);
  }
});
