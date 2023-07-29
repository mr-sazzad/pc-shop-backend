import { RequestHandler } from "express";
import { PcStorageService } from "./pc.storageServices";

export const getAllPcStorage: RequestHandler = async (_req, res) => {
  try {
    const result = await PcStorageService.getAllPcStorage();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
