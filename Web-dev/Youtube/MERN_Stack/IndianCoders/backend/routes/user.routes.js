import express from "express";
import {
  deleteUser,
  getAllUsers,
  login,
  signUp,
  updateUser,
} from "../controllers/user.controllers.js";
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/:id").put(updateUser).delete(deleteUser);

export default router;
