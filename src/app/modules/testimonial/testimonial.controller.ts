import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { TestimonialServices } from "./testimonial.service";

const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await TestimonialServices.getTestimonials();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Testimonials fetched successfully",
    data: testimonials,
  });
});

export const TestimonialControllers = {
  getTestimonials,
};
