import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
// Custom Import
import { dbConnection } from "./config/dbConn.js";
import authRouter from "./routes/auth.routes.js";
import { NOT_FOUND, customErrorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT ?? 3600;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(logger("dev"));

// ROUTES
app.use("/api/user", authRouter);
// Database connection
dbConnection();

// Custom error handlers middleware
app.use(NOT_FOUND);
app.use(customErrorHandler);
app.listen(PORT, () => console.log(` \n 🚀 http://localhost:${PORT} ✅`));
