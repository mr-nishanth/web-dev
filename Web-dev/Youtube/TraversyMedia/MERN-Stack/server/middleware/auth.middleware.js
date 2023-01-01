import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //? get the token from the headers
      token = req.headers.authorization.split(" ")[1];

      //? verify the token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

      //? Get user from the decoded token
      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      console.log(`Error ${error}`.bgGreen.red);
      res.status(403);
      throw new Error("Forbidden");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});
