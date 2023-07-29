import { Router } from "express";
import { getAllPcMonitors } from "./pc.monitorController";

const router = Router();

router.get("/pc-monitors", getAllPcMonitors);

export default router;
