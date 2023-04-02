import asyncHandler from "express-async-handler";
import Product from "../models/Product.js";

export const createProduct = asyncHandler(async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();

    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const updateProduct = asyncHandler(async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await Product.findByIdAndUpdate(    req.params.id,
      { $set: req.body },
      { new: true });
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const deleteProduct = asyncHandler(async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

export const findProducts = asyncHandler(async (req, res, next) => {
  try {
    const Products = await Product.find();

    if (Products) {
      res.status(200).json(Products);
    } else {
      res.status(404);
      err = new Error("Product not found");
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export const findProductbyid = asyncHandler(async (req, res, next) => {
  try {
    const Products = await Product.findById(req.params.id);
    if (Products) {
      res.status(200).json(Products);
    } else {
      const err = new Error(`not found`);
      res.status(404);
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
