import { PcMotherBoardModel } from "./pc.motherBoardSchema";

const getAllPcMotherBoard = async () => {
  try {
    const products = await PcMotherBoardModel.find({});

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const PcMotherBoardService = {
  getAllPcMotherBoard,
};
