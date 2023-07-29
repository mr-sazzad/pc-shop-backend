export interface Review {
  username: string;
  rating: number;
  comment: string;
}

export interface KeyFeatures {
  Brand: string;
  Model: string;
  Chipse: string;
  Socket: string;
  Memory_slots: string;
  Max_Memory: string;
  Form_Factor: string;
  PCIe_Slots: string;
  Storage: string;
  USB_Ports: string;
  Networking: string;
  Audio: string;
}

export interface Processors {
  image: string;
  product_name: string;
  category: string;
  status: "In Stock" | "Out Of Stock";
  link: string;
  price: number;
  description: string;
  key_features: KeyFeatures;
  individual_rating: number;
  average_rating: number;
  reviews: Review[];
}
