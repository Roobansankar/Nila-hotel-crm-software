const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  item: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Price", priceSchema);
