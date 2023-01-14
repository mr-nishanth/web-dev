import express from "express";
import {
  deleteUser,
  getAllUsers,
  signUp,
  updateUser,
} from "../controllers/user.controllers.js";
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/signup").post(signUp);
router.route("/:id").put(updateUser).delete(deleteUser);

export default router;
