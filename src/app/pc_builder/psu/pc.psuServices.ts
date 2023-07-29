import { PcPSUModel } from "./pc.psuSchema";
const getAllPcPSU = async () => {
  try {
    const products = await PcPSUModel.find({});

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const PcPSUService = {
  getAllPcPSU,
};
