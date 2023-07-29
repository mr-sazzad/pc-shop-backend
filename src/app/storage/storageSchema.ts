import { Schema, model } from "mongoose";
import { storageInterface } from "./storageInterface";

const StorageSchema = new Schema<storageInterface>({
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
    Specification: {
      type: String,
      required: true,
    },
    Port: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Voltage: {
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

export const StorageModel = model("Storage", StorageSchema);
