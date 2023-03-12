const { hashPassword } = require("../../utils/hashPassword");
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

module.exports = { createNewUser };
