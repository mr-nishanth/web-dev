const { getAllProvider, createProvider, updateProvider, deleteProvider } = require("../controllers/provider.controller");


const providerRouter = require("express").Router();

providerRouter.get("/", getAllProvider)
providerRouter.post("/create", createProvider)
providerRouter.put("/update", updateProvider)
providerRouter.delete("/delete", deleteProvider)

module.exports = providerRouter