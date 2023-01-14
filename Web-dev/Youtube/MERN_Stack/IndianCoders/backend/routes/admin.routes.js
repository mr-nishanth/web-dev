import express from "express";
import {
  getAllAdmins,
  login,
  signUp,
} from "../controllers/admin.controllers.js";
const router = express.Router();
router.route("/").get(getAllAdmins);
router.route("/signup").post(signUp);
router.route("/login").post(login);
export default router;
