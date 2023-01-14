import express from "express";
import { newBooking } from "../controllers/booking.controllers.js";
const router = express.Router();

router.post("/", newBooking);
export default router;
