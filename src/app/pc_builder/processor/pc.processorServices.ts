import { PcProcessorModel } from "./pc.processorSchema";
const getAllPcProcessors = async () => {
  try {
    const products = await PcProcessorModel.find({});

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const PcProcessorService = {
  getAllPcProcessors,
};
