import { ProductModel } from "../product/product.model";
import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (order: IOrder) => {
  // Start a session for transaction
  const session = await OrderModel.startSession();
  session.startTransaction();

  try {
    // Create the order
    const newOrder = await OrderModel.create([order], { session });

    // Reduce the stock for each product
    for (const product of order.products) {
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        product._id, // Assuming product._id refers to the product in the ProductModel
        { $inc: { stock: -product.quantity } },
        { new: true, session }
      );

      if (!updatedProduct) {
        throw new Error(`Product with id ${product._id} not found`);
      }

      if (updatedProduct.stock < 0) {
        throw new Error(
          `Insufficient stock for product ${updatedProduct.name}`
        );
      }
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return newOrder;
  } catch (error) {
    // Rollback the transaction in case of error
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const OrderServices = {
  createOrder,
};
