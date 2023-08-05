import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
} from "../controllers/UserController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/register", registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.get("/user-profile", protect, getUserProfile);
router.put("/update-user-profile", protect, updateUserProfile);

router.get("/", protect, getUsers);
router.delete("/users/:id", protect, admin, deleteUser);
router.get("/:id", protect, admin, getUserByID);
router.put("/user/:id", protect, admin, updateUser);

export default router;
