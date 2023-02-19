import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const register = async (req, res) => {
  const { username, password } = req.body;
  //   CHECK 422 unprocessable entity
  if (!username || !password) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  try {
    const user = User({
      username,
      password,
    });
    await user.save();
    jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "12h" },
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token, { httpOnly: true }).json({
          id: user._id,
        });
      }
    );
    console.log({ user });
  } catch (error) {
    console.log(error);
    // 11000 is the error code for duplicate key
    if (error.code === 11000) {
      return res.status(422).json({ error: "Username already exists" });
    }

    res.status(500).json({ error: "Server error" });
  }
};
