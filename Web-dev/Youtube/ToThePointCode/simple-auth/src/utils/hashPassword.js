const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

exports.verifyHashPassword = async (unHashed, hashedPassword) => {
  try {
    const match = await bcrypt.compare(unHashed, hashedPassword);
    return match;
  } catch (error) {
    throw error;
  }
};
