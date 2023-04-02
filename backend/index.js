import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRouter from "./routes/productsRouter.js";
import cartRouter from "./routes/CartRouter.js";
import { NotFounderror , errorHandler } from "./middleware/ErrorMiddleware.js";
import cors from 'cors'

import authrouters from './routes/usersAuth.js'



const app = express();

dotenv.config();



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOSERV, { family: 4 });
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDb connected");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(cors())

app.use(express.json());



app.use("/api/products", productsRouter);

app.use("/api/carts" , cartRouter  )


app.use("/api/users/" , authrouters)

app.use(NotFounderror)

app.use(errorHandler)




app.listen(process.env.PORT, () => {
  connect();
  console.log("connected to the backend");
});
