import { Router } from "express";
import { getAllProcessors, getSingleProcessor } from "./productController";

const router = Router();

router.get("/processors", getAllProcessors);
router.get("/processors/:id", getSingleProcessor);

export default router;
