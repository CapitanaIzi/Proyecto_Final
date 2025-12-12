import { Router } from "express";
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  deleteProductController
} from "../controllers/products.controller.js";

const router = Router();

router.get("/products", getAllProductsController);

router.get("/products/:id", getProductByIdController);

router.post("/products/create", createProductController);

router.delete("/products/:id", deleteProductController);

export default router;