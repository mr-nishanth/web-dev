const { getAllConsumer, createConsumer, updateConsumer, deleteConsumer } = require("../controllers/consumer.controller");

const consumerRouter = require("express").Router();

consumerRouter.get("/", getAllConsumer)
consumerRouter.post("/create", createConsumer)
consumerRouter.put("/update", updateConsumer)
consumerRouter.delete("/delete", deleteConsumer)

module.exports = consumerRouter