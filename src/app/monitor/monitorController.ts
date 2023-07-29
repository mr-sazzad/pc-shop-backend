import { RequestHandler } from "express";
import { monitorServices } from "./monitorServices";

export const getAllMonitors: RequestHandler = async (_req, res) => {
  try {
    const result = await monitorServices.getAllMonitors();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getSingleMonitor: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await monitorServices.getSingleMonitor(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
