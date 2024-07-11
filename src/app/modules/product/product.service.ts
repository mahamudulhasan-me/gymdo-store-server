import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

export const ProductServices = {
  createProduct,
};
