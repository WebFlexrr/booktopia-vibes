
export interface OrderItem {
  id: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
  items: OrderItem[];
}
