import { FeaturedModel } from "./FeaturedModel";

const getAllFeaturedCategory = async () => {
  try {
    const featured = await FeaturedModel.find();

    return featured;
  } catch (e) {
    console.log(e);
  }
};

export const featuredService = {
  getAllFeaturedCategory,
};
