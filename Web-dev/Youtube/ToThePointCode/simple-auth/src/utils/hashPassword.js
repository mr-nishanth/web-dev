const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error(error);
  }
};
