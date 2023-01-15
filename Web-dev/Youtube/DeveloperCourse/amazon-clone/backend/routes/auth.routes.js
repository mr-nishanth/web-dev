import express from "express";
const router = express.Router();

// Controller Imports
import {
  deleteUser,
  getAllUser,
  getOneUser,
  handleRefreshToken,
  loginUser,
  logout,
  registerUser,
  updatedUser,
} from "../controllers/user.controllers.js";
// Middleware Imports
import {
  authMiddleware,
  blockUser,
  isAdmin,
  unBlockUser,
} from "../middleware/authMiddleware.js";

// Authentication and authorization routes
router.post("/register", registerUser);
router.post("/login", loginUser);

//~ Protected routes via auth middleware

router.get("/all-user", [authMiddleware, isAdmin, getAllUser]);
router.get("/one-user", [authMiddleware, getOneUser]);
router.put("/edit-user", [authMiddleware, isAdmin, updatedUser]);
router.delete("/delete-user", [authMiddleware, deleteUser]);
router.put("/block-user/:id", [authMiddleware, isAdmin, blockUser]);
router.put("/unblock-user/:id", [authMiddleware, isAdmin, unBlockUser]);
router.get("/refresh", [handleRefreshToken]);
router.get("/logout", [logout]);
export default router;
