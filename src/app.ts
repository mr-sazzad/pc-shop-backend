import cors from "cors";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

import FeaturedRoutes from "./app/Featured/FeaturedRoutes";
import PSURoutes from "./app/PSU/psuRoutes";
import RamRoutes from "./app/Rams/ramRoutes";
import monitorRoutes from "./app/monitor/monitorRoutes";
import MotherBoardRoutes from "./app/motherBoard/motherBoardRoutes";
import processorsRoutes from "./app/processor/productRoute";
import StorageRoutes from "./app/storage/storageRoutes";

//pc builder
import PcMonitorsRoutes from "../src/app/pc_builder/monitor/pc.monitorRouter";
import PcMotherBoardsRoutes from "../src/app/pc_builder/motherBoard/pc.motherBoardRoutes";
import PcProcessorRoutes from "../src/app/pc_builder/processor/pc.processorRoutes";
import PcPSUSRoutes from "../src/app/pc_builder/psu/pc.psuRoutes";
import PcRamsRoutes from "../src/app/pc_builder/rams/pc.ramsRoutes";
import PcStoragesRoutes from "../src/app/pc_builder/storage/pc.storageRoutes";

const app = express();

// Load environment variables from .env file
dotenv.config();

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
    message: "Welcome To Assignment -  6",
  });
});

// Routes
app.use("/api/v1", FeaturedRoutes);
app.use("/api/v1", processorsRoutes);
app.use("/api/v1", monitorRoutes);
app.use("/api/v1", PSURoutes);
app.use("/api/v1", RamRoutes);
app.use("/api/v1", StorageRoutes);
app.use("/api/v1", MotherBoardRoutes);

// pcMonitor Routes
app.use("/api/v1/pc-builder", PcMonitorsRoutes);
app.use("/api/v1/pc-builder", PcProcessorRoutes);
app.use("/api/v1/pc-builder", PcRamsRoutes);
app.use("/api/v1/pc-builder", PcStoragesRoutes);
app.use("/api/v1/pc-builder", PcPSUSRoutes);
app.use("/api/v1/pc-builder", PcMotherBoardsRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
});

export default app;
