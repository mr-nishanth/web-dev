import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

// ? CONFIGURATION
app.use(
  cors({
    withCredentials: true,
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use("/api/v1", authRoutes);

// MONGOOSE SETUP
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `\n 👉 🚀 is ready for lunch at http://localhost:${PORT} path \n`
      )
    );
  })
  .catch((err) => console.log(err.message));

// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })
// mongoose.connection.on("connected", () => {
//     console.log("Mongoose connected!")
// }
// mongoose.set("useCreateIndex", true)
// mongoose.set("useFindAndModify", false)
// mongoose.set("useUnifiedTopology", true)
// mongoose.set("useFindAndModify", false)
