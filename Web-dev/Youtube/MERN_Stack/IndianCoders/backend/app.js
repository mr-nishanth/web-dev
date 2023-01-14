import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import logger from "morgan";
import { dbConnection } from "./config/dbConn.js";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
const app = express();

const PORT = process.env.PORT ?? 3600;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// ROUTES
app.use("/api/users", userRouter);
app.use("/api/admins", adminRouter);
// Database connection
dbConnection();

app.listen(PORT, () => console.log(`Application is listening on ${PORT}`));
