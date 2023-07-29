import { RamModel } from "./ramSchema";

const getAllRams = async () => {
  try {
    const products = await RamModel.find();

    return products;
  } catch (e) {
    console.log(e);
  }
};

const getSingleRam = async (id: string) => {
  try {
    const products = await RamModel.findById({ _id: id });

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const ramService = {
  getAllRams,
  getSingleRam,
};
