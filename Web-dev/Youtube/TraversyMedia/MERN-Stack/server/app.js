import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";
import colors from "colors";
// imports Middleware
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";

// imports
import goalRoutes from "./routes/goals.routes.js";

// Application initialization
const app = express();

//^ configuration
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

//? =============================>
//? Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//? =============================>

//* ROUTES
app.use("/api/goals", goalRoutes);

// Error handling middleware
app.use(errorHandlerMiddleware);

//! DATABASE configuration and application listeners
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_LOCAL_URI)
  .then((con) => {
    console.log(
      `\n 🥭 Connected successfully  ${con.connection.host} 🥭 \n`.cyan
        .underline
    );
    app.listen(process.env.PORT || 3600, () => {
      console.log(
        `\n 👉🚀 ready to lunch at port http://localhost:${process.env.PORT}  🚀\n`
      );
    });
  })
  .catch((err) => {
    console.log(`${err.message}`.red);
    process.exit(1);
  });
9;
``;
