import { restaurants } from "@/shared/data"

export const getRestaurantById = (id: string) => {
    return restaurants.find(restaurant => restaurant.id === id)
}