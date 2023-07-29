import { Router } from "express";
import { getAllStorage, getSingleStorage } from "./storageController";

const router = Router();

router.get("/storages", getAllStorage);
router.get("/storages/:id", getSingleStorage);

export default router;
