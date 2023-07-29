import { RequestHandler } from "express";
import { motherboardService } from "./motherBoardServices";

export const getAllMotherboards: RequestHandler = async (_req, res) => {
  try {
    const result = await motherboardService.getAllMotherboards();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSingleMotherboard: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await motherboardService.getSingleMotherboard(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
