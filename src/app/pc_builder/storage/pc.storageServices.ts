import { PcStorageModel } from "./pc.storageSchema";

const getAllPcStorage = async () => {
  try {
    const products = await PcStorageModel.find({});

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const PcStorageService = {
  getAllPcStorage,
};
