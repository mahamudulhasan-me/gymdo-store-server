import { Router } from "express";
import { TeamControllers } from "./team.controller";

const router = Router();
router.get("/", TeamControllers.getTeamMembers);
export const TeamRoutes = router;
