const router = require("express").Router();
const qutrix2k22debug = require("../controllers/qutrix2k22debug");

router.get("/", qutrix2k22debug.home);

module.exports = router;
