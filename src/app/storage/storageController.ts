import { RequestHandler } from "express";
import { storageService } from "./storageServices";

export const getAllStorage: RequestHandler = async (_req, res) => {
  try {
    const result = await storageService.getAllStorage();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSingleStorage: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await storageService.getSingleStorage(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
