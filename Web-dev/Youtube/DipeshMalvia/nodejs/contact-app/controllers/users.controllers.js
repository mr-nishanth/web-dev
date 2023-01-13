const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
/**
 * @description Get current user information
 * @route GET /api/users/current
 * @access private
 */
exports.currentUser = asyncHandler(async (req, res) => {});

/**
 * @description Register new user
 * @route POST /api/users/register
 * @access public
 */
exports.registerUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400);
    throw new Error("All fields are required");
  }

  //   Find the duplicates
  const duplicates = await User.findOne({ email: email }).lean().exec();
  if (duplicates) {
    res.status(409);
    throw new Error("Email already in use");
  }

  //   Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  //   console.log("Hashed password: " + hashedPassword);

  const newUser = await User.create({
    email,
    password: hashedPassword,
    username,
  });
  if (newUser) {
    return res.status(201).json({ _id: newUser.id, email: newUser.email });
  } else {
    res.status(400);
    throw new Error("User creation failed");
  }
});

/**
 * @description Login existing user
 * @route POST /api/users/login
 * @access public
 */
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  //   Check if the email is valid or not
  const exist = await User.findOne({ email: email }).lean().exec();

  if (!exist) {
    res.status(401);
    throw new Error("Email or password is not valid");
  }

  //   Compare the password with hashed password
  //   const verifyPassword = await bcrypt.compare(password, exist.password);
  if (exist && (await bcrypt.compare(password, exist.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: exist.username,
          email: exist.email,
          id: exist.id,
        },
      },
      process.env.JWT_ACCESS_TOKEN,
      { expiresIn: "1m" }
    );
    return res.status(200).json({ accessToken });
  }
});
