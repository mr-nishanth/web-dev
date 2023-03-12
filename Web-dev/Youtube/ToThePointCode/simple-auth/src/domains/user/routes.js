const { createNewUser } = require("./controller");

const router = require("express").Router();

// Sign up
router.post("/signup", async (req, res) => {
  try {
    let { name, email, password } = req.body;

    name = name?.trim();
    email = email?.trim();
    password = password?.trim();

    if (!(name && email && password)) {
      throw new Error("Please enter all the fields");
    } else if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    } else if (!/^[a-zA-Z]*$/.test(name)) {
      throw new Error("Name must contain only alphabets");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw new Error("Please enter a valid email");
    } else {
      // Good credentials , create new user
      const newUser = await createNewUser({ name, email, password });
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
