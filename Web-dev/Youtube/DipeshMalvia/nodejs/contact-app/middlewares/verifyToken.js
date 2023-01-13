const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    // Verify that the token
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User not authorized");
      }
      //   console.log(decoded);
      /*
                    {
                    user: {
                        username: 'admin',
                        email: 'admin@gmail.com',
                        id: '63c149e43a669c07b62f0890'
                    },
                    iat: 1673611763,
                    exp: 1673611823
                    }
        */
      // Attach the decoded data to the request object
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(401);
      // res.status(403);
      throw new Error("User is not authorized or token is missing in request");
    }
  }
});

module.exports = validateToken;
