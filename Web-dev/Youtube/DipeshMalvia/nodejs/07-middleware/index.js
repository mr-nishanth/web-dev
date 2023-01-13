// ! Five type of middleware
//1. Application-level middleware
//2. Third party middleware
//3. Router-level middleware
//4. Build-in middleware
//5. Error-handling middleware

// ====================================================

// ! Five type of middleware
//1. Application-level middleware
//2. Third party middleware
//3. Router-level middleware
//4. Build-in middleware
//5. Error-handling middleware

const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const multer = require("multer");
const port = 3500;

//^ -----START----- 4. Build-in middleware -------------->
// Get the data stream from client
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "path")));
// Virtual path
// app.use("/static",.express.static(path.join(__dirname, "path")));
//^ <-----END----- 4. Build-in middleware --------------<

//^ -----START----- 2. Third party middleware -------------->
app.use(logger("dev"));
const upload = multer({ dest: "./public/uploads" });

app.post(
  "/upload",
  upload.single("image"),
  (req, res, next) => {
    console.log(req.file);
    console.log(req.body);
    res.send(req.file);
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);
//^ <-----END----- 2. Third party middleware --------------<

//^ -----START----- 1. Application-level middleware -------------->
const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- Request: [${req.method}] - [${req.url}]`);
  next();
};
app.use(loggerMiddleware);
//^ <-----END----- 1. Application-level middleware --------------<

//^ -----START----- 3. Router-level middleware -------------->
const router = express.Router();
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
  //   const authStatus = true;
  const authStatus = false;
  if (authStatus) {
    console.log(`User authentication Status: ${authStatus}`);
    next();
  } else {
    res.status(401);
    throw new Error(`User is not authentication [${authStatus}]`);
  }
};

const getUser = (req, res, next) => {
  return res.json({ message: "Get all users" });
};
const createUser = (req, res, next) => {
  return res.json({ message: "Create new user" });
};
router.use(fakeAuth); // before execute route("/") its check fakeAuth middleware
router.route("/").get(getUser).post(createUser);
//^ <-----END----- 3. Router-level middleware --------------<

//* NOTE:
//* By default the express handles the error and it throws the error but the response of the error is in the form of an HTML page
//* Convert HTML page to JSON
//* Intercept the response and convert HTML page to JSON object and throw to user (using Error-handling middleware)

//^ >-----START----- 5. Error-handling middleware -------------->
const errorHandlingMiddleware = (err, req, res, next) => {
  //   const statusCode = res.statusCode ? res.statusCode : 500;
  // if (err) throw err;
  // console.log({ err, req, res, next });
  const statusCode = res.statusCode ?? 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      return res.json({
        title: "Unauthorized",
        message: err.message,
      });

    case 403:
      return res.json({
        title: "Forbidden",
        message: err.message,
      });

    case 404:
      return res.json({
        title: "Not Found",
        message: err.message,
      });

    case 409:
      return res.json({
        title: "Conflict",
        message: err.message,
      });

    default:
      return res.json({
        title: "Internal Server Error",
        message: err.message,
      });
  }
};

//^ <-----END----- 5. Error-handling middleware --------------<

app.all("*", () => {
  res.status(404);
  throw new Error("Route not found");
});

//NOTE:(Application level | Error handling middleware ) Above listener method
app.use(errorHandlingMiddleware);
app.listen(port, () => console.log(`Server listening on ${port}`));
