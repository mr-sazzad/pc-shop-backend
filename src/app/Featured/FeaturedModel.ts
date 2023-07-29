import { Schema, model } from "mongoose";
import { Featured } from "./FeaturedInterface";

const FeaturedSchema = new Schema<Featured>({
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
  price: Number,
  status: String,
  link: String,
  rating: Number,
});

export const FeaturedModel = model("Featured", FeaturedSchema);
