import Product from "../models/Product.js";
import products from "../data/products.js";

export const getAllProduct = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ Message: "Product not found!" });
  } catch (error) {
    next(error);
  }
};
