import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = asyncHandler(async (req, res) => {
  const order = await OrderServices.createOrder(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Order created successfully",
    data: order,
  });
});

export const OrderControllers = {
  createOrder,
};
