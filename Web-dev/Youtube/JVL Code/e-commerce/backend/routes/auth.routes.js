const { registerUser } = require("../controllers/auth.controllers");
const router = require("express").Router();

router.route("/register").post(registerUser);
router.route("/test").get((req, res) => {
  res.send("test");
});

module.exports = router;
