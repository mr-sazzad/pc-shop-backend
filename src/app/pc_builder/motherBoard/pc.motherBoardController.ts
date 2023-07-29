import { RequestHandler } from "express";
import { PcMotherBoardService } from "./pc.motherBoardServices";

export const getAllPcMotherBoard: RequestHandler = async (_req, res) => {
  try {
    const result = await PcMotherBoardService.getAllPcMotherBoard();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
