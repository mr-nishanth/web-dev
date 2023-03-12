const { hashPassword } = require("../../utils/hashPassword");
const User = require("./model");
const createNewUser = async (data) => {
  try {
    const { name, email, password } = data;

    // Check if user already exists
    const existingUser = User.findOne({ email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashPassword = await hashPassword(password);
    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });
    // Save user
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createNewUser };
