const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.post("/add", async (req, res) => {
  const { name, category } = req.body;

  if (!name || !category) {
    return res.status(400).json({ error: "Name and category are required." });
  }

  try {
    const newItem = new Item({ name, category });
    await newItem.save();
    res.status(201).json({ message: "Item added", item: newItem });
  } catch (err) {
    res.status(500).json({ error: "Failed to add item." });
  }
});

router.delete("/delete/:name", async (req, res) => {
  const name = req.params.name;

  try {
    await Item.deleteOne({ name });
    res.json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete item." });
  }
});

module.exports = router;
