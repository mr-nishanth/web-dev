import User from "../models/User.model.js";

export const registerUser = async (req, res) => {
  const { email } = req.body;
  //^ Check if the user is already registered
  const isExisting = await User.findOne({ email }).lean();
  if (!isExisting) {
    // Create a new user
    const newUser = await User.create(req.body);
    await newUser.save();
    return res.status(201).json({ newUser, success: true });
  } else {
    // The existing user
    return res
      .status(400)
      .json({ msg: "User already registered", success: false });
  }
};
