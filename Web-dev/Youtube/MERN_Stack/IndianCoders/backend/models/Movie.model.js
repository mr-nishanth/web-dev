import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  actors: [
    {
      type: String,
      required: [true, "Please provide a description"],
    },
  ],
  releaseDate: {
    type: Date,
    required: [true, "Please provide a release date"],
  },
  posterUrl: {
    type: String,
    required: [true, "Please provide a poster URL"],
  },
  featured: {
    type: Boolean,
  },
  bookings: [
    {
      type: String,
    },
  ],
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
    required: [true, "Please provide a admin details"],
  },
});

const movieModel = mongoose.model("Movie", movieSchema);

export default movieModel;
