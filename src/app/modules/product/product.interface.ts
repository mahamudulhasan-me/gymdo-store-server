export interface IProduct {
  name: string;
  category: string;
  brand: string;
  price: number;
  discount: number;
  stock: number;
  description: string;
  thumbnail: string;
  images: string[];
  subcategory: string;
  isDeleted: boolean;
}
