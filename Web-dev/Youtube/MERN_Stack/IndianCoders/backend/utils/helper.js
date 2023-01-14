import bcrypt from "bcryptjs";
export const encryptedPassword = async (password, saltCount = 10) => {
  const salt = saltCount;
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

export const decryptedPassword = async (password, userPassword) => {
  const compare = await bcrypt.compare(password, userPassword);
  return compare;
};
