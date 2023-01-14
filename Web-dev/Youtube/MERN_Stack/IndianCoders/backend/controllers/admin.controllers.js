import Admin from "../models/Admin.model.js";
import {
  createToken,
  decryptedPassword,
  encryptedPassword,
} from "../utils/helper.js";

/**
 * @description Create a new user
 * @route POST /api/users
 * @access public
 */
export const signUp = async (req, res, next) => {
  const { email, password } = req.body;

  //^ Validate the user details
  if (!email && email?.trim() === "" && !password && password?.trim() === "") {
    return res.status(422).json({ message: "Invalid User details" });
  }

  let existingAdmin;
  let newAdmin;

  try {
    existingAdmin = await Admin.findOne({ email }).lean();
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    //   ^ Password hashing
    const hashPassword = await encryptedPassword(password);
    console.log(`Hash password: ${hashPassword}`);

    newAdmin = new Admin({ email, password: hashPassword });
    newAdmin = await newAdmin.save();
  } catch (error) {
    return console.log(error);
    return next(error);
  }

  if (!newAdmin) {
    return res.status(500).json({ message: "Unexpected Error Occurred" });
  }

  return res.status(201).json({ id: newAdmin.id, email: newAdmin.email });
};

/**
 * @description Login user
 * @route POST /api/users/login
 * @access public
 */
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log({ email, password });
  //^ Validate the user details
  if (!email && email?.trim() === "" && !password && password?.trim() === "") {
    return res.status(422).json({ message: "Invalid User details" });
  }

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email: email });
  } catch (error) {
    return console.log(error);
    return next(error);
  }

  if (!existingAdmin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  // Compare password
  const isPassword = await decryptedPassword(password, existingAdmin.password);
  if (!isPassword) {
    return res.status(400).json({ message: "Admin credentials are incorrect" });
  }

  //   Provide token
  const token = await createToken(existingAdmin._id);
  return res
    .status(200)
    .json({ message: "Login successful", token, id: existingAdmin._id });
};

export const getAllAdmins = async (req, res, next) => {
  let admins;
  try {
    admins = await Admin.find().lean();
  } catch (error) {
    return console.log(error);
    return next(error);
  }

  if (!admins) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ admins });
};
