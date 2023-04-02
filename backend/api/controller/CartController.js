import asyncHandler from "express-async-handler";
import Cart from "../models/Cart.js";

export const createCart = asyncHandler(async (req, res, next) => {
  const newCart = new Cart(req.body);

console.log(req.body.data);




  try {
    const savedCart = await newCart.save();

    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const updateCart = asyncHandler(async (req, res, next) => {
  try {

  console.log(req.body);
    const {  products } = req.body; // Extract productId and newQuantity from request body


console.log("rffffffffffffffffff  :  "+products);

    const updatedCart = await Cart.findOneAndUpdate(
  { _id: req.params.id },
  { $set: { "cartItems.products": products } },
  { new: true }
)
    console.log("Updated cart:", updatedCart);
    res.status(200).json(updatedCart);
  } catch (err) {
    console.error("Error updating cart:", err);
    res.status(500).json(err);
  }
});


export const deleteCart = asyncHandler(async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

export const findCarts = asyncHandler(async (req, res, next) => {
  try {
    const Carts = await Cart.find();

    if (Carts) {
      res.status(200).json(Carts);
    } else {
      res.status(404);
      err = new Error("Cart not found");
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export const findCartbyid = asyncHandler(async (req, res, next) => {
  try {
    const Carts = await Cart.findById(req.params.id);
    if (Carts) {
      res.status(200).json(Carts);
    } else {
      const err = new Error(`not found`);
      res.status(404);
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


export const findCartbyUser = asyncHandler(async (req, res, next) => {
  try {
    const Carts = await Cart.find({ user: { $eq: req.body } })
    if (Carts) {
      res.status(200).json(Carts);
    } else {
      const err = new Error(`not found`);
      res.status(404);
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});