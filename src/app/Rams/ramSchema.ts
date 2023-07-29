import { Schema, model } from "mongoose";
import { ramInterface } from "./ramInterface";

const ramSchema = new Schema<ramInterface>({
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

export const RamModel = model("Ram", ramSchema);
