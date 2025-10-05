const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Waiter = require("../models/Waiter");
const auth = require("../middleware/auth"); // Optional if needed

const router = express.Router();

// Create Waiter (Only Admin can create)

router.post("/create", auth, async (req, res) => {
  try {
    console.log("🔹 Inside /api/waiter/create");
    console.log("👉 Request Body:", req.body);
    console.log("👉 Authenticated Admin:", req.admin); // from middleware

    const { username, password } = req.body;

    const existing = await Waiter.findOne({ username });
    if (existing) {
      console.log("⚠️ Waiter already exists");
      return res.status(400).json({ message: "Waiter already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const waiter = new Waiter({ username, password: hashedPassword });

    await waiter.save();
    console.log("✅ Waiter created successfully");

    res.json({ message: "Waiter created successfully" });
  } catch (err) {
    console.error("🔥 Error in /create waiter route:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Waiter Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const waiter = await Waiter.findOne({ username });
    if (!waiter)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, waiter.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: waiter._id, name: waiter.username },
      process.env.JWT_SECRET
      // { expiresIn: "1h" }
    );

    res.json({ token, name: waiter.username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all waiter usernames
router.get("/usernames", async (req, res) => {
  try {
    const waiters = await Waiter.find({}, "username"); // Only get the username field
    const usernames = waiters.map((w) => w.username);
    res.json(usernames);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch waiter usernames" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const users = await Waiter.find().select("username _id");
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
