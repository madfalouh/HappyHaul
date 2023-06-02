import asyncHandler from "express-async-handler";
import Order from "../models/Order.js";

export const createOrder = asyncHandler(async (req, res, next) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();

    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const updateOrder = asyncHandler(async (req, res, next) => {
  try {
    console.log(req.body);
    const { products, shipping, paymentMethod } = req.body;

    const updateOrder = await Cart.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { "orderItems.products": products } },
      { $set: { shipping: shipping } },
      { $set: { paymentMethod: paymentMethod } },
      { new: true }
    );
    console.log("Updated cart:", updateOrder);
    res.status(200).json(updateOrder);
  } catch (err) {
    console.error("Error updating cart:", err);
    res.status(500).json(err);
  }
});

export const deleteOrder = asyncHandler(async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

export const findOrderbyid = asyncHandler(async (req, res, next) => {
  try {
    const Order = await Order.findById(req.params.id);
    if (Order) {
      res.status(200).json(Order);
    } else {
      const err = new Error(`not found`);
      res.status(404);
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



export const findOrderbyUser = asyncHandler(async (req, res, next) => {
  try {
    const Order = await Order.find({ user: { $eq: req.body } });
    if (Order) {
      res.status(200).json(Order);
    } else {
      const err = new Error(`not found`);
      res.status(404);
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
