import { TestimonialModel } from "./testimonial.model";

const getTestimonials = async () => {
  const testimonials = await TestimonialModel.find();
  return testimonials;
};

export const TestimonialServices = {
  getTestimonials,
};
