const router = require("express").Router();

router.get("^/", (req, res) => {
  return res.json({ message: "This is home page" });
});
router.get("/users", (req, res) => {
  return res.json({ message: "This is user page" });
});

router.get("/user/:id", (req, res) => {
  return res.json({ message: `User ID : ${req.params.id}` });
});
router.post("/users", (req, res) => {
  return res.json({ message: `Create User` });
});

router.put("/user/:id", (req, res) => {
  return res.json({ message: `Update User ID : ${req.params.id}` });
});

router.delete("/user/:id", (req, res) => {
  return res.json({ message: `Delete User ID : ${req.params.id}` });
});

module.exports = router;
