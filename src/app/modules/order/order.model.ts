import { model, Schema } from "mongoose";
import { IOrder, IOrderedProduct } from "./order.interface";

const orderedProductSchema = new Schema<IOrderedProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const shippingInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
const orderSchema = new Schema<IOrder>({
  products: {
    type: [orderedProductSchema],
    required: true,
  },
  shippingInfo: shippingInfoSchema,
  paymentMethod: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<IOrder>("order", orderSchema);
