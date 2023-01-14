import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import logger from "morgan";
import { dbConnection } from "./config/dbConn.js";
import usersRouter from "./routes/user.routes.js";
import adminsRouter from "./routes/admin.routes.js";
import moviesRouter from "./routes/movie.routes.js";
import bookingsRouter from "./routes/booking.routes.js";
const app = express();

const PORT = process.env.PORT ?? 3600;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// ROUTES
app.use("/api/users", usersRouter);
app.use("/api/admins", adminsRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/bookings", bookingsRouter);
// Database connection
dbConnection();

app.listen(PORT, () => console.log(`Application is listening on ${PORT}`));
