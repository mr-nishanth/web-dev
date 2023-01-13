// https://expressjs.com/en/guide/routing.html

const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/users.controllers");
const validateToken = require("../middlewares/verifyToken");

// https://expressjs.com/en/5x/api.html
const router = require("express").Router();

/*
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current").get(validateToken, currentUser);
*/

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
