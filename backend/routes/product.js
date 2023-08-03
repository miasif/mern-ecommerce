import express from "express";
const router = express.Router();

import { getAllProduct, getProduct } from "../controllers/ProductController.js";

router.get("/", getAllProduct);
router.get("/:id", getProduct);

export default router;
