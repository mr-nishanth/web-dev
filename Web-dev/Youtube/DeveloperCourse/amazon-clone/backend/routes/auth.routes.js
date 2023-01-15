import express from "express";

// Controller Imports
import {
  deleteUser,
  getAllUser,
  getOneUser,
  loginUser,
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
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);

//~ Protected routes via auth middleware

// router
//   .route("/:id")
//   .get([isAdmin, getOneUser])
//   .put(updatedUser)
//   .delete(deleteUser);
router.get("/all-user", [authMiddleware, isAdmin, getAllUser]);
router.get("/one-user", [authMiddleware, getOneUser]);
router.put("/edit-user", [authMiddleware, isAdmin, updatedUser]);
router.delete("/delete-user", [authMiddleware, deleteUser]);
router.put("/block-user/:id", [authMiddleware, isAdmin, blockUser]);
router.put("/unblock-user/:id", [authMiddleware, isAdmin, unBlockUser]);
export default router;
