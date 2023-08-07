import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToDelivered,
  updateOrderToPaid,
  getOrders,
} from "../controllers/OrderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/add-order-items", protect, admin, addOrderItems);
router.get("/my-orders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.get("/:id/deliver", protect, admin, updateOrderToDelivered);
router.get("/:id/pay", protect, admin, updateOrderToPaid);
router.get("/", protect, admin, getOrders);

export default router;
