import jwt from "jsonwebtoken";

export const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN, { expiresIn: "3d" });
};
