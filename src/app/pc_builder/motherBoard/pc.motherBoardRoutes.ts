import { Router } from "express";
import { getAllPcMotherBoard } from "./pc.motherBoardController";

const router = Router();

router.get("/pc-motherboards", getAllPcMotherBoard);

export default router;
