import express from "express";

import path from "path";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
const app = express();
// setup body parser middleware for parsing json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware for allow cross origin requests
app.use(cors());

// Logger middleware
app.use(logger("dev"));

// Helmet middleware for basic security
app.use(helmet());

export default app;
