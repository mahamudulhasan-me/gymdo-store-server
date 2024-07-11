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

const getProducts = async (
  querys: Record<string, unknown>
): Promise<IProduct[]> => {
  const query: any = {};
  if (querys?.category) query.category = querys?.category;
  if (querys?.brand) query.brand = querys?.brand;

  const products = await ProductModel.find(query).sort("-createdAt").lean();
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
