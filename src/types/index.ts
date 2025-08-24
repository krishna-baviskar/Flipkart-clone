export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  specifications: { [key: string]: string };
  reviews: {
    id: string;
    author: string;
    rating: number;
    comment: string;
  }[];
  seller: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
