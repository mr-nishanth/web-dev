const { getMatchWhistle, getMatchConsumer } = require('../controllers/whistle.constrollers')

const whistleRouter = require('express').Router()

whistleRouter.get("/match", getMatchWhistle)
whistleRouter.get("/consumer/:id", getMatchConsumer)

module.exports = whistleRouter