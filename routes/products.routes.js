import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  deleteProductController
} from "../controllers/products.controller.js";

const router = Router();

router.get("/", authMiddleware, getAllProductsController);
router.get("/:id", authMiddleware, getProductByIdController);
router.post("/create", authMiddleware, createProductController);
router.delete("/:id", authMiddleware, deleteProductController);

export default router;