import { Router } from "express";
import validRequestHandler from "../../middlewares/validRequestHandler";
import { OrderControllers } from "./order.controller";
import { ZodOrderValidationSchema } from "./order.validation";

const router = Router();

router.post(
  "/",
  validRequestHandler(ZodOrderValidationSchema),
  OrderControllers.createOrder
);

export const OrderRoutes = router;
