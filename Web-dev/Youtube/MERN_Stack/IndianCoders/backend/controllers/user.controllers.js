import User from "../models/User.model";

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
