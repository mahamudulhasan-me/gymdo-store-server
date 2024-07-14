/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from "../../errors/AppError";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct = async (product: IProduct): Promise<IProduct> => {
  const newProduct = await ProductModel.create(product);
  return newProduct;
};

// const getProducts = async (
//   query: Record<string, unknown>
// ): Promise<IProduct[]> => {
//   const productsQuery = new QueryBuilder(ProductModel.find(), query)
//     .search(["name"])
//     .filter()
//     .sort()
//     .paginate()
//     .fields();
//   const products = await productsQuery.modelQuery.exec();
//   return products;
// };

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
  const query: any = {};

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
  const product = await ProductModel.findById(id);
  if (!product) throw new AppError(404, "Product not found!");
  return product;
};
export const ProductServices = {
  createProduct,
  getProducts,
  getProduct,
};
