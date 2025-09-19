const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// POST /api/categories
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const existing = await Category.findOne({ name });
    if (existing)
      return res.status(400).json({ error: "Category already exists" });

    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/categories/:name
router.delete("/:name", async (req, res) => {
  try {
    const result = await Category.deleteOne({ name: req.params.name });
    res.status(200).json({ deleted: result.deletedCount > 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
