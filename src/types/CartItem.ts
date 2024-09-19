export type Cart = {
  [restaurantId: string]: CartItem[];
};

export type MenuCart = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export type RestaurantCart = {
  id: string;
  name: string;
  image: string;
  rating: number;
};

export type CartItem = {
  menu: MenuCart;
  quantity: number;
  restaurant: RestaurantCart;
};
