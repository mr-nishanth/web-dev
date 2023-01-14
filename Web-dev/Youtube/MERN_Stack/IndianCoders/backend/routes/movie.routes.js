import express from "express";
import {
  addMovie,
  getAllMovies,
  getByIdMovie,
} from "../controllers/movie.controllers.js";
const router = express.Router();
router.route("/addMovie").post(addMovie);
router.route("/getAll").get(getAllMovies);
router.route("/getById/:id").get(getByIdMovie);
export default router;
