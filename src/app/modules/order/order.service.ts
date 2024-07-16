import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (order: IOrder) => {
  const newOrder = await OrderModel.create(order);
  return newOrder;
};

export const OrderServices = {
  createOrder,
};
