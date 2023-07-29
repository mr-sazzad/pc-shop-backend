import { MonitorModel } from "./monitorSchema";

const getAllMonitors = async () => {
  try {
    const products = await MonitorModel.find();

    return products;
  } catch (e) {
    console.log(e);
  }
};

const getSingleMonitor = async (id: string) => {
  try {
    const product = await MonitorModel.findById({ _id: id });

    return product;
  } catch (e) {
    console.log(e);
  }
};

export const monitorServices = {
  getAllMonitors,
  getSingleMonitor,
};
