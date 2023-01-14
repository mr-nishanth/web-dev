import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Types.ObjectId,
    ref: "Movie",
    required: [true, "Please provide a Movie ID"],
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
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a User ID"],
  },
});

const bookingModel = mongoose.model("Booking", bookingSchema);

export default bookingModel;
