import { Router } from "express";
import dashboardController from "./dashboard.controller";

const router = Router();

router.get("/:userId", dashboardController.getDashboard);

export default router;
