import express from "express";
import {
  deleteUser,
  getAllUsers,
  getBookingsOfUser,
  login,
  signUp,
  updateUser,
} from "../controllers/user.controllers.js";
const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/:id").put(updateUser).delete(deleteUser);
router.get("/bookings/:id", getBookingsOfUser);
export default router;
