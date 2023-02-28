const router = require("express").Router();

const {
  registerUser,
  loginUser,
  getUserById,
} = require("../controllers/user.controllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", getUserById);

module.exports = router;
