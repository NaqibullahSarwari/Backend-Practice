import express from "express";
import {
  getAllProducts,
  createProducts,
  getProductById,
} from "../Controller/ProductController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProducts);

export default router;
