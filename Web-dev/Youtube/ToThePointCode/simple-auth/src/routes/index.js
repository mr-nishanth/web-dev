const router = require("express").Router();
const userRoutes = require("../domains/user");

router.use("/user", userRoutes);

module.exports = router;
