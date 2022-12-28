const { createGolfTime } = require("../controllers/user.controllers");

const userRouter = require("express").Router();

// Create Golf time whistle

userRouter.post("/createGolfTime", createGolfTime)


module.exports = userRouter