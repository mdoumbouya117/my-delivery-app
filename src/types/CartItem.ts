export interface CartItem {
  id: string;
  restaurant_id: string;
  restaurant_name: string;
  restaurant_image: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  imageUrl?: string;
  description?: string;
}

export type Cart = {
  [restaurantId: string]: CartItem[];
};
