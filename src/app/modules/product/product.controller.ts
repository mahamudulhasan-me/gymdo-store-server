import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const createProduct = asyncHandler(async (req, res) => {
  const product = await ProductServices.createProduct(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Product created successfully",
    data: product,
  });
});

const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductServices.getProducts(req.query);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Products fetched successfully",
    data: products,
  });
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await ProductServices.getProduct(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product fetched successfully",
    data: product,
  });
});

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const updatedProduct = await ProductServices.updateProduct(id, data);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product update successfully",
    data: updatedProduct,
  });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await ProductServices.deleteProduct(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product deleted successfully",
    data: deletedProduct,
  });
});

export const ProductControllers = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
