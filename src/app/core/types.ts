export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;  // optional
  stock?: number;     // optional
}

export interface CartItem {
  product: Product;
  quantity: number;
}
