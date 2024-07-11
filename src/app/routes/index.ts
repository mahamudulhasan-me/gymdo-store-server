import { Router } from "express";
import { ProductRouters } from "../modules/product/product.route";

const router = Router();
const moduleRouters = [
  {
    path: "/products",
    route: ProductRouters,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));

export default router;
