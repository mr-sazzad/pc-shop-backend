import { PcRamsModel } from "./pc.ramsSchema";

const getAllPcRams = async () => {
  try {
    const products = await PcRamsModel.find({});

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const PcRamsService = {
  getAllPcRams,
};
