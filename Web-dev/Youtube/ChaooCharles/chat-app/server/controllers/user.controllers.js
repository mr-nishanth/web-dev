const User = require("../models/user.model");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create Token
const createToken = (id) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  return jwt.sign(
    {
      id,
    },
    JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

// @route   POST api/users/register
// @desc    Register user
// @access  Public
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Check for empty fields
  if (!name || !email || !password) {
    return res.status(400).json({
      status: false,
      message: "Please provide name, email and password",
    });
  }

  // Check for valid email
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      status: false,
      message: "Please provide a valid email",
    });
  }

  // Check strong password
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      status: false,
      message: "Please provide a strong password",
    });
  }

  try {
    // Check for existing user
    let user = await User.findOne({ email }).exec();

    if (user) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user
    await user.save();

    // Create token
    const token = createToken(user._id);

    // Send response
    return res.status(201).json({
      status: true,
      message: "User created successfully",
      id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server error",
    });
  }
};

// @route   POST api/users/login
// @desc    Login user
// @access  Public
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Please provide name, email and password",
    });
  }

  try {
    // Check for existing user
    let user = await User.findOne({ email }).select("+password").exec();

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        status: false,
        message: "Invalid credentials",
      });
    }

    // Create token
    const token = createToken(user._id);

    // Send response
    return res.status(200).json({
      status: true,
      message: "User logged in successfully",
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server error",
    });
  }
};

// @route   GET api/users/:id
// @desc    Get user by id
// @access  Private
exports.getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      status: false,
      message: "Please provide user id",
    });
  }

  // Check valid mongo id
  if (!validator.isMongoId(userId)) {
    return res.status(400).json({
      status: false,
      message: "Please provide a valid user id",
    });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: `Welcome ${user.name}`,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server error",
    });
  }
};
