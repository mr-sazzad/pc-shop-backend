import { Router } from "express";
import {
  getAllMotherboards,
  getSingleMotherboard,
} from "./motherBoardController";

const router = Router();

router.get("/motherboards", getAllMotherboards);
router.get("/motherboards/:id", getSingleMotherboard);

export default router;
