import { Router } from "express";
import { getAllFeaturedCategory } from "./FeaturedController";

const router = Router();

router.get("/featured", getAllFeaturedCategory);

export default router;
