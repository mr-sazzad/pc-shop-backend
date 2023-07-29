import { MotherboardModel } from "./motherBoardSchema";

const getAllMotherboards = async () => {
  try {
    const products = await MotherboardModel.find();

    return products;
  } catch (e) {
    console.log(e);
  }
};

const getSingleMotherboard = async (id: string) => {
  try {
    const products = await MotherboardModel.findById({ _id: id });

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const motherboardService = {
  getAllMotherboards,
  getSingleMotherboard,
};
