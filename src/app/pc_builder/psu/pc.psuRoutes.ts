import { Router } from "express";
import { getAllPcPSU } from "./pc.psuController";

const router = Router();

router.get("/pc-psus", getAllPcPSU);

export default router;
