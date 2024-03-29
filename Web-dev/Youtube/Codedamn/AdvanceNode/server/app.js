import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";
import helmet from "helmet";
// Native Package
import path from "path";
import { fileURLToPath } from "url";

/**
 * Configuration and Middleware
 */
// Only use ["type": "module"] import as ES6+
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// dotenv configuration
dotenv.config({ path: "./config/env/.env" });
// express instance
const app = express();
// for post request handling
app.use(express.json());
// helmet for request security
app.use(helmet());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
//
app.use(morgan("common"));
//
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//
app.use(cors());
// set the local storage directory[profile images etc..] , In future we should S3 like that
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/**
 * ROUTES WITH FILES
 * This route needs for upload files
 * Otherwise routes are in separate routes folder
 */

/**
 * ROUTES
 */
// app.use("/auth", authRoutes);

/**
 * MONGOOSE CONFIG/SETUP
 */

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`\n 🥭 Connected Successfully  🥭`);
    app.listen(PORT, () =>
      console.log(`\n Application listening on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(`${err} didn't connect`));
