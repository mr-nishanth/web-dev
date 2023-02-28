require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8000;

app.disable("x-powered-by");

// MONGODB CONNECTION
mongoose.set("strictQuery", false);
const MONGO_URI = process.env.MONGO_LOCAL_URI;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log(`MongoDB connected: ${con.connection.host}`);
  })
  .catch((err) => {
    console.log(`MongoDB Error: ${err.message}`);
    process.exit(1);
  });
