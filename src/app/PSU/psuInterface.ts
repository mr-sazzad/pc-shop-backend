export interface Review {
  username: string;
  rating: number;
  comment: string;
}

export interface KeyFeatures {
  Brand: string;
  Model: string;
  Specification: string;
  Port: string;
  Type: string;
  Voltage: string;
}

export interface psuInterface {
  image: string;
  product_name: string;
  category: string;
  status: "In Stock" | "Out Of Stock";
  price: number;
  description: string;
  key_features: KeyFeatures;
  individual_rating: number;
  average_rating: number;
  reviews: Review[];
}
