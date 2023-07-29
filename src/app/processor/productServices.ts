import { ProcessorsModel } from "./productSchema";

const getAllProcessors = async () => {
  try {
    const products = await ProcessorsModel.find();

    return products;
  } catch (e) {
    console.log(e);
  }
};

const getSingleProcessor = async (id: string) => {
  try {
    const products = await ProcessorsModel.findById({ _id: id });

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const productServices = {
  getAllProcessors,
  getSingleProcessor,
};
