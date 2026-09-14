const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res, next) => {
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((cur, item) => (cur + item.prodect.price * item.qty), 0),
  ).toFixed(2);
  const status = "pending";
  const order = await orderModel.create({ cartItems, amount, status });
  res.json({
    succrss: true,
    order,
  });
};
