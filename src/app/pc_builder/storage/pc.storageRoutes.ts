import { Router } from "express";
import { getAllPcStorage } from "./pc.storageController";

const router = Router();

router.get("/pc-storages", getAllPcStorage);

export default router;
