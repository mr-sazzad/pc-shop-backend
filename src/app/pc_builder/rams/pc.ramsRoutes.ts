import { Router } from "express";
import { getAllPcRams } from "./pc.ramsController";

const router = Router();

router.get("/pc-rams", getAllPcRams);

export default router;
