import { StorageModel } from "./storageSchema";

const getAllStorage = async () => {
  try {
    const products = await StorageModel.find();

    return products;
  } catch (e) {
    console.log(e);
  }
};

const getSingleStorage = async (id: string) => {
  try {
    const products = await StorageModel.findById({ _id: id });

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const storageService = {
  getAllStorage,
  getSingleStorage,
};
