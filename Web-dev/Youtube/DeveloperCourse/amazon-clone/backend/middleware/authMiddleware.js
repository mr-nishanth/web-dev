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
