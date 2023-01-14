import Booking from "../models/Booking.model.js";
import User from "../models/User.model.js";
import Movie from "../models/Movie.model.js";
import mongoose from "mongoose";

export const newBooking = async (req, res, next) => {
  const { movie, date, seatNumber, user } = req.body;

  let existingMovie;
  let existingUser;

  try {
    existingMovie = await Movie.findById(movie);
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(error.message);
  }

  if (!existingMovie) {
    return res.status(404).json({ message: "Movie not found" });
  }
  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  let booking;

  try {
    booking = new Booking({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    existingUser.bookings.push(booking);
    existingMovie.bookings.push(booking);
    await existingUser.save({ session: session });
    await existingMovie.save({ session: session });
    await booking.save({ session: session });
    session.commitTransaction();
  } catch (error) {
    return console.log(error.message);
    return next(error);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ booking });
};

export const getAllBooking = async (req, res, next) => {
  let booking;

  try {
    booking = await Booking.find().lean();
  } catch (error) {
    return console.log(error.message);
    return next(error);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ booking });
};
export const getBookingById = async (req, res, next) => {
  const { id } = req.params;
  let booking;

  try {
    booking = await Booking.findById(id).lean();
  } catch (error) {
    return console.log(error.message);
    return next(error);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ booking });
};

export const deleteBooking = async (req, res, next) => {
  const { id } = req.params;

  let booking;
  try {
    const idExisting = await Booking.findById(id).lean();
    if (!idExisting) {
      return res.status(404).json({ message: "Booking data not found" });
    }
    booking = await Booking.findByIdAndRemove(id).populate("user movie");
    console.log("Deleted booking" + booking);
    const session = await mongoose.startSession();
    session.startTransaction();
    await booking.user.bookings.pull(booking);
    await booking.movie.bookings.pull(booking);
    await booking.user.save({ session: session });
    await booking.movie.save({ session: session });
    session.commitTransaction();
  } catch (error) {
    return console.log(error.message);
    return next(error);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unable to Delete" });
  }

  return res.status(200).json({ message: "Successfully Deleted" });
};
