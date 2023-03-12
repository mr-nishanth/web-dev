const jwt = require("jsonwebtoken");
const { TOKEN_KEY, TOKEN_EXPIRY } = process.env;
exports.createToken = async ({
  tokenData,
  tokenKey = TOKEN_KEY,
  expiresIn = TOKEN_EXPIRY,
}) => {
  try {
    const token = await jwt.sign(tokenData, tokenKey, { expiresIn: expiresIn });
    return token;
  } catch (error) {
    throw error;
  }
};
