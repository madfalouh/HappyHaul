import express from "express";
import {
  createCart,
  deleteCart,
  findCartbyid,
  findCartbyUser,
  findCarts,
  updateCart,
} from "../api/controller/CartController.js";

const router = express.Router();

router.post("/", createCart);

router.put("/:id", updateCart);

router.get("/", findCarts);

router.get("/:id", findCartbyid);

router.get("/", findCartbyUser);

router.delete("/:id", deleteCart);

export default router;
