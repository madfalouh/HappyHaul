import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./api/data/users.js";
import products from "./api/data/products.js";
import Order from "./api/models/orderModel.js";
import Product from "./api/models/Product.js";
import User from "./api/models/User.js";
import connectDB from "./db.js";

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();

    await Product.deleteMany();

    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((prod) => {
      return { ...prod, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("created");

    process.exit();
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
};

const deletetData = async () => {
  try {
    await Order.deleteMany();

    await Product.deleteMany();

    await User.deleteMany();

    console.log("deleted");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  console.log("delete");

  deletetData();
} else {
  importData();
}
