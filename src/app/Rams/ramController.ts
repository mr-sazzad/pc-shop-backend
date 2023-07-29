import { RequestHandler } from "express";
import { ramService } from "./ramServices";

export const getAllRams: RequestHandler = async (_req, res) => {
  try {
    const result = await ramService.getAllRams();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSingleRam: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await ramService.getSingleRam(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
