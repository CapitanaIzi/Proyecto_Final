import {
  getAllProductsModel,
  getProductByIdModel,
  createProductModel,
  deleteProductModel
} from "../models/products.model.js";

export const getAllProductsService = async () => {
  return await getAllProductsModel();
};

export const getProductByIdService = async (id) => {
  return await getProductByIdModel(id);
};

export const createProductService = async (data) => {
  if (!data.name || !data.price || data.stock === undefined) {
    throw new Error("Datos incompletos");
  }

  return await createProductModel(data);
};

export const deleteProductService = async (id) => {
  return await deleteProductModel(id);
};