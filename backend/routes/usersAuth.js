import express from "express";
import {
  getUserProfile,
  registerUser,
  updateUser,
  userAuth,
} from "../api/controller/UserController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getUserProfile);

router.put("/update" , protect  , updateUser )

router.post("/login", userAuth);

router.post("/register", registerUser);

export default router;
