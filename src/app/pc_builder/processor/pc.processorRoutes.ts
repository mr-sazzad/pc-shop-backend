import { Router } from "express";
import { getAllPcProcessors } from "./pc.processorController";

const router = Router();

router.get("/pc-processors", getAllPcProcessors);

export default router;
