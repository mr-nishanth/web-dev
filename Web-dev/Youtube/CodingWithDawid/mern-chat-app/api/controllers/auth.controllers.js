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
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err;
        return res.cookie("token", token, { httpOnly: true }).status(201).json({
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

export const profile = async (req, res) => {
  console.log(req.cookies);

  const { token } = req.cookies;

  console.log({ token });
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ error: "Unauthorized" });
    }
    res.json(decodedToken);
  });
};
