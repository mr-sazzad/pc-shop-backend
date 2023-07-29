import { RequestHandler } from "express";
import { PcPSUService } from "./pc.psuServices";

export const getAllPcPSU: RequestHandler = async (_req, res) => {
  try {
    const result = await PcPSUService.getAllPcPSU();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
