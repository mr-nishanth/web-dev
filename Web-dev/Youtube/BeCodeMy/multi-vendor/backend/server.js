const path = require("path");
const app = require("./app");
const connectDatabase = require("./db/database");

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error 🥲 ${err.message}`);
  console.log(`Shutting down the server for handling uncaught exceptions`);
});

// Configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: path.join(__dirname, "config", ".env"),
  });
}

// Connect Database
connectDatabase();

// Server configuration
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//   Handling promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error 🥲 ${err.message}`);
  console.log(
    `Shutting down the server for handling unhandled promise Rejection`
  );
  server.close(() => {
    process.exit(1);
  });
});
