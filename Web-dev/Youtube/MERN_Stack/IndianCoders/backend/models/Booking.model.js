import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  movie: {
    type: String,
    required: [true, "Please provide a movie name"],
  },
  date: {
    type: Date,
    required: [true, "Please provide a booking date"],
  },
  seatNumber: {
    type: Number,
    required: [true, "Please provide a seat number"],
  },
  user: {
    type: String,
    required: [true, "Please provide a user"],
  },
});

const bookingModel = mongoose.model("Booking", bookingSchema);

export default bookingModel;
