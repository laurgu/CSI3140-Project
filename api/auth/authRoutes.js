const express = require("express");
const router = new express.Router();
const User = require("../auth/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

router.post("/api/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already registered");
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log("User registered successfully");
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    next(error);
  }
});

router.post("/api/login", async (req, res, next) => {
  const pswrd = "password234";
  const prehashed =
    "$2b$10$S8p2rLFBsvp5vTYTQJCw4.e2nMeSl1FOn/0UcHOJYAq8JjLIj1/86";

  bcrypt
    .compare(pswrd, prehashed)
    .then((result) => {
      console.log("RESULT:", result);
    })
    .catch((error) => {
      console.error("Error comparing passwords:", error);
    });

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid email or password" });
    }
    console.log("eneted email:", email);
    console.log("Stored hashed password:", user.password); // Print the stored hashed password for debugging
    console.log("entered password:", password);
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log("Is password match:", isPasswordMatch); // Log whether the passwords match or not for debugging

    if (!isPasswordMatch) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, config.jwtSecret);

    console.log("User logged in successfully");
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    next(error);
  }
});

module.exports = router;
