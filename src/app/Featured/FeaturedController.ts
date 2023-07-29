import { RequestHandler } from "express";
import { featuredService } from "./FeaturedService";

export const getAllFeaturedCategory: RequestHandler = async (_req, res) => {
  try {
    const result = await featuredService.getAllFeaturedCategory();
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
