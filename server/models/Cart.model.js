const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  quantity: { type: Number, required: true },
});

const CartModel = mongoose.model("Cart", cartSchema);

module.exports = CartModel;