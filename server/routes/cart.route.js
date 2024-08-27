const express = require("express");
const CartModel = require("../models/Cart.model");
const userAuthentication = require("../middlewares/auth.middleware");
const cart = require("../middlewares/cart.middleware");
require("dotenv").config();

const CartRouter = express.Router();

CartRouter.post("/add/:productId", userAuthentication,cart, async (req, res) => {
  const { userID, quantity = 1 } = req.body;
  const { productId } = req.params;

  try {
    const existingCartItem = await CartModel.findOne({ userID, productId });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
      return res.status(201).send({ message: "Item Quantity Added" });
    }

    const newCartItem = new CartModel({ userID, productId, quantity });
    await newCartItem.save();

    res.status(200).send({ message: "Item added to Cart", newCartItem });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

CartRouter.get("/", userAuthentication, async (req, res) => {
  const { userID } = req.body;

  try {
    const items = await CartModel.find({ userID });
    res.status(200).send({ items });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

CartRouter.delete("/remove/:productId", userAuthentication, async (req, res) => {
  const { productId } = req.params;
  const userID = req.body.userID; 


  try {
    const cartItem = await CartModel.findOne({
      productId: productId,
      userID: userID,
    });
    console.log("Cart Item:", cartItem);

    if (!cartItem) {
      return res.status(404).send({ message: "Item not found in cart" });
    }

    await CartModel.findByIdAndDelete(cartItem._id);
    res.status(200).send({ message: "Item removed from cart." });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = CartRouter;
