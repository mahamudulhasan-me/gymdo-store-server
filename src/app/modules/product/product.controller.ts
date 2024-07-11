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

export const ProductControllers = {
  createProduct,
};
