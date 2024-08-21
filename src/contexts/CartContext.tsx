"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CartItem } from "../types/CartItem";
import {
  addToCart,
  clearCart,
  getCart,
  removeFromCart,
} from "@/lib/cartStorage";

interface CartContextProps {
  cartItems: CartItem[];
  cartCount: number;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const addItem = (item: CartItem) => {
    addToCart(item);
    setCartItems(getCart());
  };

  const removeItem = (itemId: string) => {
    removeFromCart(itemId);
    setCartItems(getCart());
  };

  const clearCartItems = () => {
    clearCart();
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addItem,
        removeItem,
        clearCart: clearCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
