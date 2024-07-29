import { Document, model, Schema } from "mongoose";

// Interface for Testimonial
export interface ITestimonial extends Document {
  rating: number;
  description: string;
  name: string;
  occupation: string;
  profile_image: string;
}

// Mongoose Schema for Testimonial
const testimonialSchema = new Schema<ITestimonial>(
  {
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

// Creating the Mongoose model
export const TestimonialModel = model<ITestimonial>(
  "Testimonial",
  testimonialSchema
);
