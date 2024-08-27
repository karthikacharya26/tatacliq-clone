const express = require("express");
const ProductModel = require("../models/Product.model");
require("dotenv").config();

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  const search = req.query.search;
  const category = req.query.category;

  let query = {};

  if (search) {
    query.$or = [
      { tags: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  if (category) {
    query.category = category;
  }

  try {
    const products = await ProductModel.find(query);

    res.status(200).send({
      totalProducts: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

ProductRouter.get("/categories", async (_, res) => {
  try {
    const products = await ProductModel.find();
    let categories = [];
    let tags = [];

    products.forEach((product) => {
      categories.push(product.category);
      tags.push(product.tags);
    });

    categories = [...new Set(categories)];
    tags = [...new Set(tags)];

    res.status(200).send({ categories, tags });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

ProductRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findOne({ _id: id });
    res.status(200).send({ Product: product });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

ProductRouter.post("/", async (req, res) => {
  const data = req.body;
  try {
    const newProduct = new ProductModel(data);

    await newProduct.save();

    res
      .status(201)
      .send({ message: "Product Added Successfully", Product: newProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = ProductRouter;
