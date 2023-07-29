import { RequestHandler } from "express";
import { PcRamsService } from "./pc.ramsServices";

export const getAllPcRams: RequestHandler = async (_req, res) => {
  try {
    const result = await PcRamsService.getAllPcRams();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
