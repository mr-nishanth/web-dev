import express from "express";
import { getAllUsers } from "../controllers/user.controllers";
const router = express.Router();

router.route("/").get(getAllUsers).post();

export default router;
