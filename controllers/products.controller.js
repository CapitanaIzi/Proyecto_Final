import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from "../services/products.service.js";

export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos: " + error.message });
  }
};

export const getProductByIdController = async (req, res) => {
  try {
    const product = await getProductByIdService(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto: " + error.message });
  }
};

export const createProductController = async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "El producto debe tener nombre y precio" });
  }

  try {
    const newProduct = await createProductService(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto: " + error.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const deletedProduct = await deleteProductService(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Producto no encontrado para eliminar" });
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto: " + error.message });
  }
};