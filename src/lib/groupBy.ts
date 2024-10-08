import { CartItem } from "@/types/CartItem";

export const groupBy = (tempItems: CartItem[]): Record<string, CartItem[]> =>
  tempItems.reduce((group: any, cartItem: CartItem) => {
    const {
      restaurant: { id },
    } = cartItem;
    group[id] = group[id] ?? [];
    group[id].push(cartItem);
    return group;
  }, {});

export const groupByMenuSection = (menus: any) =>
  menus.reduce((group: any, menu: any) => {
    const { section } = menu;
    group[section] = group[section] ?? [];
    group[section].push(menu);
    return group;
  }, {});

export const groupByMenuId = (menus: CartItem[]) =>
  menus.reduce((group: any, menu: any) => {
    const { id } = menu;
    group[id] = group[id] ?? [];
    group[id].push(menu);
    return group;
  }, []);
