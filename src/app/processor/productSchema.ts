import { Processors } from "./productInterface";

import { Schema, model } from "mongoose";

const ProcessorsSchema = new Schema<Processors>({
  image: {
    type: String,
    required: true,
  },
  product_name: {
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
    enum: ["In Stock", "Out Of Stock"],
  },
  link: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  key_features: {
    Brand: {
      type: String,
      required: true,
    },
    Model: {
      type: String,
      required: true,
    },
    Chipse: {
      type: String,
      required: true,
    },
    Socket: {
      type: String,
      required: true,
    },
    Memory_slots: {
      type: String,
      required: true,
    },
    Max_Memory: {
      type: String,
      required: true,
    },
    Form_Factor: {
      type: String,
      required: true,
    },
    PCIe_Slots: {
      type: String,
      required: true,
    },
    Storage: {
      type: String,
      required: true,
    },
    USB_Ports: {
      type: String,
      required: true,
    },
    Networking: {
      type: String,
      required: true,
    },
    Audio: {
      type: String,
      required: true,
    },
  },
  individual_rating: {
    type: Number,
    required: true,
  },
  average_rating: {
    type: Number,
    required: true,
  },
  reviews: [],
});

export const ProcessorsModel = model("Processor", ProcessorsSchema);
