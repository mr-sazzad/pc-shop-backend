import { PsuModel } from "./psuSchema";

const getAllPSU = async () => {
  try {
    const products = await PsuModel.find({});

    return products;
  } catch (e) {
    console.log(e);
  }
};

const getSinglePSU = async (id: string) => {
  try {
    const products = await PsuModel.findById({ _id: id });

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const PSUService = {
  getAllPSU,
  getSinglePSU,
};
