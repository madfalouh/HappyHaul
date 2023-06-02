import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    orderItems: {
      products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          qty: { type: Number, required: true },
          _id: false,
        },
      ],
    },

    shipping: {
      address: { type: String, required: true },
      shippingMethod: { type: String, required: true },
      paymentMethod: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
