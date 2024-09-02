import { couriers, customers, orders, restaurants } from "@/shared/data";

export const getRestaurants = () => {
  return restaurants;
};

export const getRestaurantById = (id: string) => {
  return restaurants.find((restaurant) => restaurant.id === id);
};

export const getCouriers = () => {
  return couriers;
};

export const getOrders = () => {
  return orders;
};

export const getCustomers = () => {
  return customers;
};
