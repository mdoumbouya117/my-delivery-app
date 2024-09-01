import { CartItem } from "../types/CartItem";

const CART_STORAGE_KEY = "my-app-cart";

export const getCart = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      return JSON.parse(storedCart) as CartItem[];
    }
  }
  return [];
};

export const saveCart = (cartItems: CartItem[]): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }
};

export const addToCart = (newItem: CartItem): void => {
  const cartItems = getCart();
  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === newItem.id
  );

  if (existingItemIndex !== -1) {
    cartItems[existingItemIndex].quantity++;
  } else {
    cartItems.push({ ...newItem, quantity: 1 });
  }

  saveCart(cartItems);
};

export const removeFromCart = (itemId: string): void => {
  const cartItems = getCart().filter((item) => item.id !== itemId);
  saveCart(cartItems);
};

export const clearCart = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CART_STORAGE_KEY);
  }
};
