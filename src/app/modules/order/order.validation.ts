import { z } from "zod";

export const ZodOrderValidationSchema = z.object({
  body: z.object({
    products: z.array(
      z.object({
        name: z.string({
          required_error: "Name is required",
          invalid_type_error: "Name must be a string",
        }),
        category: z.string({
          required_error: "Category is required",
          invalid_type_error: "Category must be a string",
        }),
        brand: z.string({
          required_error: "Brand is required",
          invalid_type_error: "Brand must be a string",
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
        subcategory: z.string({
          required_error: "Subcategory is required",
          invalid_type_error: "Subcategory must be a string",
        }),
        quantity: z.number({
          required_error: "Quantity is required",
          invalid_type_error: "Quantity must be a number",
        }),
      })
    ),
    shippingInfo: z
      .object({
        name: z.string({
          required_error: "Name is required",
          invalid_type_error: "Name must be a string",
        }),
        contact: z.string({
          required_error: "Contact is required",
          invalid_type_error: "Contact must be a string",
        }),
        city: z.string({
          required_error: "City is required",
          invalid_type_error: "City must be a string",
        }),
        postalCode: z.string({
          required_error: "Postal code is required",
          invalid_type_error: "Postal code must be a string",
        }),
        address: z.string({
          required_error: "Address is required",
          invalid_type_error: "Address must be a string",
        }),
      })
      .strict(),
    paymentMethod: z
      .string({
        required_error: "Payment method is required",
        invalid_type_error: "Payment method must be a string",
      })
      .optional(),
    totalAmount: z
      .number({
        required_error: "Total amount is required",
        invalid_type_error: "Total amount must be a number",
      })
      .optional(),
  }),
});
