import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  addToCart,
  getCart,
  removeFromCart,
  clearCart,
  CartItem,
} from "@/lib/cart";

const MenuItemCard = ({
  id,
  name,
  description,
  image,
  price,
  quantity,
}: {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}) => {
  return (
    <div
      key={id}
      className="flex flex-row items-start overflow-hidden shadow p-1"
    >
      <div className="w-1/3 h-28 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-2/3 pl-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="flex justify-between items-baseline">
          <p className="mt-3 text-sm font-medium text-indigo-600">
            ${price.toFixed(2)}
          </p>
          <div>
            {quantity > 0 ? (
              <>
                <Button
                  onClick={() => removeFromCart(id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </Button>
                <span className="mx-1">{quantity}</span>
                <Button
                  onClick={() =>
                    addToCart({
                      id,
                      name,
                      price,
                      quantity,
                      image,
                    })
                  }
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </Button>
              </>
            ) : (
              <Button
                onClick={() =>
                  addToCart({
                    id,
                    name,
                    price,
                    quantity,
                    image,
                  })
                }
                className="bg-green-500 text-white px-4 py-1 rounded"
              >
                +
              </Button>
            )}
          </div>
        </div>
        {/* <div className="mt-3 flex items-center space-x-2">
          {quantity > 0 ? (
            <>
              <button
                onClick={handleRemove}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={handleAdd}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                +
              </button>
            </>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              +
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default MenuItemCard;
