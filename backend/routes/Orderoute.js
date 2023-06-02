import express from "express";
import { createOrder, deleteOrder, findOrderbyid, findOrderbyUser, updateOrder } from "../api/controller/OrderController";


const router = express.Router();

router.post("/", createOrder);

router.put("/:id", updateOrder);


router.get("/:id", findOrderbyid);

router.get("/", findOrderbyUser);

router.delete("/:id", deleteOrder);

export default router;
