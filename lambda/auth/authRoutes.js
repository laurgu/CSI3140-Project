const express = require("express");
const router = new express.Router();
const User = require("../../api/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../api/config");

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
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.password); // Compare the entered password with the stored hashed password

    if (!isPasswordMatch) {
      console.log("Invalid password for user:", email);
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, config.JWTSecret);

    console.log(email + " logged in successfully");
    res.json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    next(error);
  }
});

module.exports = router;
