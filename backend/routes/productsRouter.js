import express from "express";
import {
  createProduct,
  deleteProduct,
  findProductbyid,
  findProducts,
  updateProduct,
} from "../api/controller/ProductController.js";

const router = express.Router();

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.get("/:id", findProductbyid);

router.get("/", findProducts);

export default router;
