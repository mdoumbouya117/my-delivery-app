"use client";

import { useStorage } from "@/hooks/useStorage";
import { CartItem, MenuCart, RestaurantCart } from "@/types/CartItem";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";

type CartProviderProps = {
  children: ReactNode;
};

type TypeCartProvider = {
  incrementQuantity: (menu: MenuCart, restaurant: RestaurantCart) => void;
  decrementQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  menuQuantity: (menuId: string) => number;
  getTotalPrice: () => number;
  cartQuantity: number;
  cartItems: CartItem[];
};

const CartContext = createContext<TypeCartProvider | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useStorage<CartItem[]>("shopping-cart", []);

  const cartQuantity = useMemo(
    () => cartItems.reduce((quantity, item) => item.quantity + quantity, 0),
    [cartItems]
  );

  const menuQuantity = useCallback(
    (menuId: string): number =>
      cartItems?.find(({ menu }) => menu.id === menuId)?.quantity ?? 0,
    [cartItems]
  );

  const incrementQuantity = useCallback(
    (menu: MenuCart, restaurant: RestaurantCart) => {
      setCartItems((currItems) => {
        if (currItems.find((item) => item.menu.id === menu.id) == null) {
          return [
            ...currItems,
            {
              restaurant,
              menu,
              quantity: 1,
            } as CartItem,
          ];
        } else {
          return currItems.map((item) => {
            if (item.menu.id === menu.id) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          });
        }
      });
    },
    [setCartItems]
  );

  const decrementQuantity = useCallback(
    (id: string) => {
      setCartItems((currItems) => {
        if (currItems.find(({ menu }) => menu.id === id)?.quantity === 1) {
          return currItems.filter(({ menu }) => menu.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.menu.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (id: string) => {
      setCartItems((prevItems) =>
        prevItems.filter(({ menu }) => menu.id !== id)
      );
    },
    [setCartItems]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);
  const getTotalPrice = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.menu.price * item.quantity,
      0
    );
  }, [cartItems]);

  const value = useMemo(
    () => ({
      incrementQuantity,
      decrementQuantity,
      removeFromCart,
      clearCart,
      menuQuantity,
      getTotalPrice,
      cartItems,
      cartQuantity,
    }),
    [
      cartItems,
      cartQuantity,
      clearCart,
      decrementQuantity,
      getTotalPrice,
      incrementQuantity,
      menuQuantity,
      removeFromCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
