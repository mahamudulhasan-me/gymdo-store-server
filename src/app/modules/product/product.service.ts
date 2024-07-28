/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from "../../errors/AppError";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

interface QueryParams {
  category?: string;
  brand?: string;
  searchTerm?: string;
  price?: number | number[];
  sort?:
    | string
    | { [key: string]: "asc" | "desc" }
    | [string, "asc" | "desc"][];
}

const getProducts = async (querys: QueryParams): Promise<IProduct[]> => {
  const { category, brand, searchTerm, sort, price } = querys;

  // Constructing the query object
  const query: any = { isDeleted: { $ne: true } };

  if (category) {
    query.category = category;
  }

  if (searchTerm) {
    query.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
    ];
  }

  if (brand) {
    query.brand = brand;
  }

  if (price) {
    const [maxPrice, minPrice] = Array.isArray(price)
      ? price
      : [Number(price), Number(price - 100)];
    query.price = { $gte: minPrice, $lte: maxPrice };
  }

  // Executing the query and sorting the results
  const products = await ProductModel.find(query)
    .sort(sort || "-createdAt")
    .lean();

  return products;
};

const getProduct = async (id: string): Promise<IProduct> => {
  const product = await ProductModel.findOne({
    _id: id,
    isDeleted: { $ne: true },
  });
  if (!product) throw new AppError(404, "Product not found!");
  return product;
};

const updateProduct = async (productId: string, data: IProduct) => {
  const updatedProduct = await ProductModel.findOneAndUpdate(
    { _id: productId, isDeleted: { $ne: true } },
    data,
    { new: true }
  );
  if (!updatedProduct)
    throw new AppError(404, "Product not found or has been deleted!");
  return updatedProduct;
};

const deleteProduct = async (productId: string) => {
  const deletedProduct = await ProductModel.findByIdAndUpdate(productId, {
    isDeleted: true,
  });
  if (!deletedProduct)
    throw new AppError(404, "Product not found or has already been deleted!");
  return deletedProduct;
};

export const ProductServices = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
