import { Router } from "express";
import { TestimonialControllers } from "./testimonial.controller";

const router = Router();
router.get("/", TestimonialControllers.getTestimonials);
export const TestimonialRoutes = router;
