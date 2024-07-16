import { IProduct } from "../product/product.interface";

export interface IOrderedProduct extends IProduct {
  quantity: number;
}

export interface IOrder {
  products: IOrderedProduct[];
  shippingInfo: {
    name: string;
    contact: string;
    city: string;
    postalCode: string;
    address: string;
  };
  paymentMethod: string;
  totalAmount: number;
}
