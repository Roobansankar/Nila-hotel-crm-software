const mongoose = require("mongoose");

const WaiterSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Waiter", WaiterSchema);
