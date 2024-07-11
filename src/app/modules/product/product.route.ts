import { Router } from "express";
import validRequestHandler from "../../middlewares/validRequestHandler";
import { ProductControllers } from "./product.controller";
import { ZodProductCreateValidationSchema } from "./product.validation";

const router = Router();

router.get("/", ProductControllers.getProducts);
router.get("/:id", ProductControllers.getProduct);
router.post(
  "/",
  validRequestHandler(ZodProductCreateValidationSchema),
  ProductControllers.createProduct
);

export const ProductRouters = router;
