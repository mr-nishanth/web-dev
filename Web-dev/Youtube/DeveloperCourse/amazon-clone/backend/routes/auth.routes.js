import express from "express";
import {
  deleteUser,
  getAllUser,
  getOneUser,
  loginUser,
  registerUser,
  updatedUser,
} from "../controllers/user.controllers.js";
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/all-user", getAllUser);
router.route("/:id").get(getOneUser).put(updatedUser).delete(deleteUser);
export default router;
