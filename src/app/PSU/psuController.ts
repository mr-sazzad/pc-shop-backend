import { RequestHandler } from "express";
import { PSUService } from "./psuServices";

export const getAllPSU: RequestHandler = async (_req, res) => {
  try {
    const result = await PSUService.getAllPSU();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSinglePSU: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await PSUService.getSinglePSU(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
