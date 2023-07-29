export interface Motherboard {
  image: string;
  productName: string;
  category: string;
  status: "In Stock" | "Out of Stock";
  price: number;
  description: string;
  keyFeatures: {
    brand: string;
    model: string;
    specification: string;
    port: string;
    type: string;
    voltage: string;
  };
  individualRating: number;
  averageRating: number;
  reviews: string[];
}
