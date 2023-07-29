import { Router } from "express";
import { getAllPSU, getSinglePSU } from "./psuController";

const router = Router();

router.get("/psus", getAllPSU);
router.get("/psus/:id", getSinglePSU);

export default router;
