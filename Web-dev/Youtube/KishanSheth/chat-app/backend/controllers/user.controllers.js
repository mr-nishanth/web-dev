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

// !=================================================================================
export const loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  console.log(
    `\n \t\t\t\t\t 🔔🔔 Login User 🔔🔔  \n ${JSON.stringify(req.body)}\n `
  );
  //^ Check if the user is exists or not

  try {
    const isUsername = await User.findOne({ username }).exec();

    const isPassword = await isUsername?.isPasswordMatched(password);
    // ^ Check if the user is exists as well as password is correct
    if (!isUsername)
      return res.json({ msg: "Invalid Username or password", status: false });
    if (!isPassword)
      return res.json({ msg: "Invalid username or Password", status: false });

    console.log(
      `\n ⚠️⚠️ LOGIN STATUS ⚠️⚠️  \n 
        USER CHECK ${isUsername ? "true" : "false"} \n
        PASSWORD CHECK ${isPassword} \n`
    );
    console.log("PASS U", isUsername.password);

    return res.json({ user: isUsername, status: true });
  } catch (error) {
    next(error);
  }
});

// !=================================================================================
export const setAvatar = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { image } = req.body;
  console.log(
    `\n \t\t\t\t\t 🔔🔔 Set Avatar 🔔🔔  \n ID : ${JSON.stringify(
      req.params
    )}\n Images : ${JSON.stringify(req.body)}\n `
  );
  //^ Set Avatar image
  try {
    const userAvatar = await User.findByIdAndUpdate(
      id,
      { isAvatarImageSet: true, avatarImage: image },
      { new: true }
    ).exec();
    return res.json({
      isSet: userAvatar.isAvatarImageSet,
      image: userAvatar.avatarImage,
    });
  } catch (error) {
    next(error);
  }
});
