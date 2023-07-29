import { PcMonitorModel } from "./pc.monitorSchema";

const getAllPcMonitors = async () => {
  try {
    const products = await PcMonitorModel.find({});

    return products;
  } catch (e) {
    console.log(e);
  }
};

export const PcMonitorService = {
  getAllPcMonitors,
};
