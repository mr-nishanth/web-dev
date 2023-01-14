import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const encryptedPassword = async (password, saltCount = 10) => {
  const salt = saltCount;
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

export const decryptedPassword = async (password, userPassword) => {
  const compare = await bcrypt.compare(password, userPassword);
  return compare;
};

export const createToken = async (id) => {
  const token = await jwt.sign({ id }, process.env.JWT_ACCESS_TOKEN, {
    expiresIn: "7d",
  });
  return token;
};
