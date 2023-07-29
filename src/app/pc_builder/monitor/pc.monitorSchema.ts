import { Schema, model } from "mongoose";
import { PcMonitor } from "./pc.monitorInterface";

const PCMonitorSchema = new Schema<PcMonitor>({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["In Stock", "Out of Stock"],
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keyFeatures: {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    specification: {
      type: String,
      required: true,
    },
    port: {
      type: String,
      required: true,
    },
    resolution: {
      type: String,
      required: true,
    },
  },
  individualRating: {
    type: Number,
    required: true,
  },
  averageRating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: [String],
    default: [],
  },
});

export const PcMonitorModel = model<PcMonitor>("PcMonitor", PCMonitorSchema);
