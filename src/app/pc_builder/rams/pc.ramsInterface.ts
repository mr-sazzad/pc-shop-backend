export interface PcRams {
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
    resolution: string;
  };
  individualRating: number;
  averageRating: number;
  reviews: Review[];
}

export interface Review {
  username: string;
  rating: number;
  comment: string;
}
