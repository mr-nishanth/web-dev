import express from "express";
import {
  deleteBooking,
  getAllBooking,
  getBookingById,
  newBooking,
} from "../controllers/booking.controllers.js";
const router = express.Router();

router.route("/").get(getAllBooking).post(newBooking);
router.route("/:id").get(getBookingById).delete(deleteBooking);
export default router;
