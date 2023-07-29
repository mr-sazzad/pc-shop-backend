import { Router } from "express";
import { getAllRams, getSingleRam } from "./ramController";

const router = Router();

router.get("/rams", getAllRams);
router.get("/rams/:id", getSingleRam);

export default router;
