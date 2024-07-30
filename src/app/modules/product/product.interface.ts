export interface IProduct {
  _id?: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  stock: number;
  description: string;
  thumbnail: string;
  image: string;
  subcategory: string;
  isDeleted: boolean;
}
