import mongoose from "mongoose";
import Admin from "../models/Admin.model.js";
import Movie from "../models/Movie.model.js";
import { verifyToken } from "../utils/helper.js";

export const addMovie = async (req, res, next) => {
  let extractedToken = req.headers.authorization || req.headers.Authorization;
  extractedToken = extractedToken.split(" ")[1];
  if (!extractedToken && extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token not found" });
  }

  let adminID;

  // ^ Verify the token
  adminID = await verifyToken(extractedToken);
  console.log("ADMIN ID => " + adminID);

  // Create a new movie
  const { actors, title, description, releaseDate, posterUrl, featured } =
    req.body;
  if (
    !title &&
    title?.trim() === "" &&
    !description &&
    description?.trim() === "" &&
    !posterUrl &&
    posterUrl?.trim()
  ) {
    return res.status(422).json({ message: "Invalid user inputs" });
  }

  let movie;
  try {
    movie = new Movie({
      title,
      description,
      actors,
      releaseDate: new Date(`${releaseDate}`),
      posterUrl,
      featured,
      admin: adminID,
    });

    const session = await mongoose.startSession();
    const adminUser = await Admin.findById(adminID);
    console.log(`adminUser ${adminUser}`);
    session.startTransaction();
    await movie.save({ session: session });
    adminUser.addedMovies.push(movie);
    await adminUser.save({ session: session });
    await session.commitTransaction();
  } catch (error) {
    return console.log(error);
    return next(error);
  }
  if (!movie) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ movie });
};

export const getAllMovies = async (req, res, next) => {
  let movies;
  try {
    movies = await Movie.find().lean();
  } catch (error) {
    return console.log(error);
    return next(error);
  }
  if (!movies) {
    return res.status(500).json({ message: "Request Failed" });
  }

  return res.status(200).json({ movies });
};

export const getByIdMovie = async (req, res, next) => {
  const { id } = req.params;
  let movie;
  try {
    movie = await Movie.findById(id).lean().exec();
  } catch (error) {
    return console.log(error);
    return next(error);
  }
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  return res.status(200).json({ movie });
};
