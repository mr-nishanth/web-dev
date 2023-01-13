const asyncHandler = require("express-async-handler");

/**
 * @description Get current user information
 * @route GET /api/users/current
 * @access private
 */
exports.currentUser = asyncHandler(async (req, res) => {});

/**
 * @description Register new user
 * @route POST /api/users/register
 * @access public
 */
exports.registerUser = asyncHandler(async (req, res) => {});

/**
 * @description Login existing user
 * @route POST /api/users/login
 * @access public
 */
exports.loginUser = asyncHandler(async (req, res) => {});
