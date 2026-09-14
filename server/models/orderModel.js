const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  cartItems: Array,
  amount: String,
  status: String,
});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
