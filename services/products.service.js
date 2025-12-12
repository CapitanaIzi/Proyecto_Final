let mockProducts = [
  { id: 1, name: "Producto A", price: 100 },
  { id: 2, name: "Producto B", price: 200 }
];

export const getAllProductsService = async () => {
  return mockProducts;
};

export const getProductByIdService = async (id) => {
  const product = mockProducts.find(p => p.id == id);
  if (!product) throw new Error("Producto no encontrado");
  return product;
};

export const createProductService = async (data) => {
  const newProduct = { id: Date.now(), ...data };
  mockProducts.push(newProduct);
  return newProduct;
};

export const deleteProductService = async (id) => {
  const index = mockProducts.findIndex(p => p.id == id);
  if (index === -1) throw new Error("Producto no encontrado");
  return mockProducts.splice(index, 1)[0];
};