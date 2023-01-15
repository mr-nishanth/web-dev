import asyncHandler from "express-async-handler";
import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
// Verify JWT Token
export const authMiddleware = asyncHandler(async (req, res, next) => {
  const check =
    req?.headers?.authorization?.startsWith("Bearer") ||
    req?.headers?.Authorization?.startsWith("Bearer");
  const token =
    req?.headers?.Authorization?.split(" ")[1] ||
    req?.headers?.authorization?.split(" ")[1];
  console.log(
    `\n ⚠️⚠️ Auth Middleware STATUS ⚠️⚠️  \n 
        HEADER : ${check} \n
        TOKEN :  ${token} \n`
  );
  if (check && token) {
    try {
      /*
      const decoded = jwt.verify(
        token,
        process.env.JWT_ACCESS_TOKEN,
        async (err, decoded) => {
          if (err) {
            throw new Error(err);
          }
          console.log(`\n DECODED :${JSON.stringify(decoded)} \n `);
          // Find the user with help of the decoded (id)
          const user = await User.findById(decoded?.id);
        }
      );
      */
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
      console.log(`\n DECODED :${JSON.stringify(decoded)} \n `);
      // Find the user with help of the decoded (id)
      const user = await User.findById(decoded?.id).select({ email: 1 });
      console.log(
        `\n GET USER EMAIL VIA DECODED :${JSON.stringify(user.email)} \n `
      );
      // Attach the user to request object
      req.user = user;
      next();
    } catch (error) {
      throw new Error("Not Authorized token expired, Please login again");
    }
  } else {
    throw new Error("There is no authorization token available");
  }
});

// Check the user is admin or not
export const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req?.user;

  const adminUser = await User.findOne({ email }).select({ role: 1 });

  console.log(
    `\n ⚠️⚠️ IsAdmin STATUS ⚠️⚠️  \n
        EMAIL :  ${req?.user?.email} \n       
        ROLE :  ${adminUser?.role} \n       
        STATUS :  ${adminUser?.role !== "admin" ? false : true} \n`
  );

  if (adminUser?.role !== "admin") {
    res.status(403);
    throw new Error("You are not an administrator");
  } else {
    next();
  }
});

// Block the user
export const blockUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(
    `\n ⚠️⚠️ Block STATUS ⚠️⚠️  \n        
    ID :  ${id} \n       
        `
  );
  try {
    const blockUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: true },
      { new: true }
    );
    return res.json({ msg: "User Block" });
  } catch (error) {
    throw new Error(error);
  }
});
// UnBlock the user
export const unBlockUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  console.log(
    `\n ⚠️⚠️ UnBlock STATUS ⚠️⚠️  \n        
    ID :  ${id} \n       
        `
  );
  try {
    const blockUser = await User.findByIdAndUpdate(
      id,
      { isBlocked: false },
      { new: true }
    );
    return res.json({ msg: "User UnBlock" });
  } catch (error) {
    throw new Error(error);
  }
});
