import express from "express";
import {
  getAllProducts,
  createProducts,
} from "../Controller/ProductController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/products", createProducts);

export default router;
