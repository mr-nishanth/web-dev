const router = require("express").Router();

const {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers,
} = require("../controllers/user.controllers");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userId", getUserById);
router.get("/", getAllUsers);

module.exports = router;
