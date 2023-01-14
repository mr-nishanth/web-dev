import Booking from "../models/Booking.model.js";

export const newBooking = async (req, res, next) => {
  const { movie, date, seatNumber, user } = req.body;

  let booking;

  try {
    booking = new Booking({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });
    booking = await booking.save();
  } catch (error) {
    return console.log(error.message);
    return next(error);
  }

  if (!booking) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ booking });
};
