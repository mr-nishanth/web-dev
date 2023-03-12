const { createToken } = require("../../utils/createToken");
const {
  hashPassword,
  verifyHashPassword,
} = require("../../utils/hashPassword");
const User = require("./model");
const createNewUser = async (data) => {
  // console.log({ data });
  try {
    const { name, email, password } = data;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashPwd = await hashPassword(password);
    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashPwd,
    });
    // Save user
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

const authenticateUser = async (data) => {
  try {
    const { email, password } = data;
    console.log({ data });

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new Error("Invalid credentials");
    }

    // Compare password
    const hashedPassword = user?.password;
    const passwordMatch = await verifyHashPassword(password, hashedPassword);
    if (!passwordMatch) {
      throw new Error("Invalid credentials");
    }

    // Create user token
    const tokenData = { userId: user?._id, email };
    const token = await createToken({ tokenData });
    // assign user token
    user.token = token;
    user.password = undefined;
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser, authenticateUser };
