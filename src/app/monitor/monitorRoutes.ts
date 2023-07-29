import { Router } from "express";
import { getAllMonitors, getSingleMonitor } from "./monitorController";

const router = Router();

router.get("/monitors", getAllMonitors);
router.get("/monitors/:id", getSingleMonitor);

export default router;
