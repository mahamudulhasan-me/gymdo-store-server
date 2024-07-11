import { z } from "zod";

export const ZodProductCreateValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    price: z.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }),
    discount: z.number({
      required_error: "Discount is required",
      invalid_type_error: "Discount must be a number",
    }),
    stock: z.number({
      required_error: "Stock is required",
      invalid_type_error: "Stock must be a number",
    }),
    thumbnail: z.string({
      required_error: "Thumbnail is required",
      invalid_type_error: "Thumbnail must be a string",
    }),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    }),
    category: z.string({
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
    }),
    brand: z.string({
      required_error: "Brand is required",
      invalid_type_error: "Brand must be a string",
    }),
    subcategory: z.string({
      required_error: "Subcategory is required",
      invalid_type_error: "Subcategory must be a string",
    }),
  }),
});
