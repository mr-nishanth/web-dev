const router = require('express').Router()

const qutrix2k22quiz  = require("../controllers/qutrix2k22quiz")

router.get("/",qutrix2k22quiz.home)



module.exports = router