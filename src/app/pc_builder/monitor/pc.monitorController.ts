import { RequestHandler } from "express";
import { PcMonitorService } from "./pc.monitorServece";

export const getAllPcMonitors: RequestHandler = async (_req, res) => {
  try {
    const result = await PcMonitorService.getAllPcMonitors();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
