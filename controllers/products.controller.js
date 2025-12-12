import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from "../services/products.service.js";

export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createProductController = async (req, res) => {
  try {
    const newProduct = await createProductService(req.body);
    res.json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const deletedProduct = await deleteProductService(req.params.id);
    res.json({ deleted: deletedProduct });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};