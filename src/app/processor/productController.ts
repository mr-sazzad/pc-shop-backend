import { RequestHandler } from "express";
import { productServices } from "./productServices";

export const getAllProcessors: RequestHandler = async (_req, res) => {
  try {
    const result = await productServices.getAllProcessors();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSingleProcessor: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await productServices.getSingleProcessor(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
