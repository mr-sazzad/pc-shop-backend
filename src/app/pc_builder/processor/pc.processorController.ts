import { RequestHandler } from "express";
import { PcProcessorService } from "./pc.processorServices";

export const getAllPcProcessors: RequestHandler = async (_req, res) => {
  try {
    const result = await PcProcessorService.getAllPcProcessors();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
