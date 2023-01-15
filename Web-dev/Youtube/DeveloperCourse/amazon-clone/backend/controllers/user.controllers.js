import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/User.model.js";
import { generateToken } from "../middleware/jwtToken.js";
import { validateID } from "../utils/validateMongoDBID.js";
import { generateRefreshToken } from "../middleware/refreshToken.js";

// !=================================================================================
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

// !=================================================================================
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
    // Setup refresh token
    const refreshToken = generateRefreshToken(isExisting._id);
    const updateRefreshToken = await User.findByIdAndUpdate(
      isExisting._id,
      { refreshToken: refreshToken },
      { new: true }
    );
    // set the refresh token to cookie
    res.cookie("refreshToken", refreshToken, {
      secure: false,
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000, // 3days
    });
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
// !=================================================================================
// Handle refresh token
export const handleRefreshToken = asyncHandler(async (req, res) => {
  // const cookie = req.cookies;
  const refreshToken = req?.cookies?.refreshToken;
  if (!refreshToken) {
    res.status(404);
    throw new Error("No Refresh token found in the cookie");
  }

  const user = await User.findOne({ refreshToken }).select({ password: 0 });
  if (!user) {
    res.status(404);
    throw new Error("No Refresh token found in the Database or Not matched");
  }

  // Verify that the refresh token [cookie & database]
  jwt.verify(refreshToken, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
    console.log(`\n GET DECODED :${JSON.stringify(decoded)} \n `);
    if (err || user.id !== decoded.id) {
      res.status(400);
      throw new Error("There was an error getting the refresh token");
    }

    // Provide the new refresh token
    const newAccessToken = generateToken(user._id);
    res.json({ accessToken: newAccessToken });
  });

  console.log(
    `\n \t\t\t\t\t 🔔🔔 Get User Refresh Token 🔔🔔  \n 
    COOKIE : ${JSON.stringify(refreshToken) ? "true" : "false"} \n
    DATABASE : ${JSON.stringify(user?.refreshToken) ? "true" : "false"} \n
    `
  );
  return res.status(200).json(user);
});
// !=================================================================================
// Logout functionality
export const logout = asyncHandler(async (req, res) => {
  const refreshToken = req?.cookies?.refreshToken;
  if (!refreshToken) {
    res.status(404);
    throw new Error("No Refresh token found in the cookie");
  }
  const user = await User.findOne({ refreshToken }).select({ refreshToken: 1 });
  if (!user) {
    res.clearCookie("refreshToken", { httpOnly: true, secure: false });
    return res.sendStatus(204);
  }
  await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });
  res.clearCookie("refreshToken", { httpOnly: true, secure: false });
  return res.sendStatus(204);
});

// !=================================================================================
export const getAllUser = asyncHandler(async (req, res) => {
  console.log(`\n \t\t\t\t\t 🔔🔔 Get All User 🔔🔔  \n `);
  try {
    const getUsers = await User.find().lean();
    return res.status(200).json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// !=================================================================================
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

// !=================================================================================
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

// !=================================================================================
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
