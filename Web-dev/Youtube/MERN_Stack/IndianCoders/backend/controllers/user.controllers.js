import User from "../models/User.model.js";
import { encryptedPassword } from "../utils/helper.js";

/**
 * @description Get all users
 * @route GET /api/users
 * @access public
 */
export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find().lean();
  } catch (error) {
    return next(error);
  }

  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(200).json({ users });
};

/**
 * @description Create a new user
 * @route POST /api/users
 * @access public
 */
export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  //^ Validate the user details
  if (
    !name &&
    name.trim() === "" &&
    !email &&
    email.trim() === "" &&
    !password &&
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid User details" });
  }
  const hashPassword = await encryptedPassword(password);
  console.log(`Hash password: ${hashPassword}`);
  let newUser;
  try {
    newUser = new User({ name, email, password: hashPassword });
    newUser = await newUser.save();
  } catch (error) {
    return console.log(error);
    // return next(error);
  }

  if (!newUser) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ id: newUser.id, email: newUser.email });
};
/**
 * @description Update existing user
 * @route PUT /api/users/:id
 * @access public
 */
export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  //^ Validate the user details
  if (
    (!name && name.trim() === "") ||
    (!email && email.trim() === "") ||
    (!password && password.trim() === "")
  ) {
    return res.status(422).json({ message: "Invalid User details" });
  }
  const hashPassword = await encryptedPassword(password);
  console.log(`Updated Hash password: ${hashPassword}`);
  let updateUser;
  try {
    updateUser = await User.findByIdAndUpdate(
      id,
      { name: name, email: email, password: hashPassword },
      { new: true }
    );
    // updateUser = await updateUser.save(); // automatically saved
  } catch (error) {
    return console.log(error);
    // return next(error);
  }

  if (!updateUser) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  return res.status(200).json({ message: "Updated Successfully" });
};
export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  let deleteUser;
  try {
    deleteUser = await User.findByIdAndDelete(id);
  } catch (error) {
    return console.log(error);
    return next(error);
  }
  if (!deleteUser) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  return res.status(200).json({ message: "Deleted Successfully" });
};
