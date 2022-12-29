const { createTodo, getTodo } = require("../controllers/novu.controllers");

const novuRouter = require("express").Router();

novuRouter.get("/", getTodo)

novuRouter.post("/", createTodo)

module.exports = novuRouter