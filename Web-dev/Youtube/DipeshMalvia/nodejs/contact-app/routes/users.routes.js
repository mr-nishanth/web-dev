// https://expressjs.com/en/guide/routing.html

const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/users.controllers");

// https://expressjs.com/en/5x/api.html
const router = require("express").Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current").get(currentUser);

module.exports = router;
