import { Router } from "express";
import { OrderRoutes } from "../modules/order/order.route";
import { ProductRouters } from "../modules/product/product.route";
import { TeamRoutes } from "../modules/team/team.route";
import { TestimonialRoutes } from "../modules/testimonial/testimonial.route";

const router = Router();
const moduleRouters = [
  {
    path: "/products",
    route: ProductRouters,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
  {
    path: "/testimonials",
    route: TestimonialRoutes,
  },
  {
    path: "/teams",
    route: TeamRoutes,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
