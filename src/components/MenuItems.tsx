"use client";

import React, { useState } from "react";
import ScrollNav from "./ScrollNav";
import MenuItemCard from "./MenuItem";
import { Menu } from "@/types/Menu";

type MenuProps = {
  id: string;
  name: string;
  image: string;
  menu: Menu[];
};

const MenuItems = ({ restaurant }: { restaurant: MenuProps }) => {
  const { id, name, image, menu: menuItems } = restaurant;

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredMenuItems = menuItems.map((menu) => ({
    ...menu,
    items: menu.items.filter(
      (item) =>
        menu.category.toLowerCase().includes(searchQuery) ||
        item.name.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    ),
  }));

  return (
    <div className="py-5">
      <h2>Menu</h2>
      <div className="mb-4 max-w-sm">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border"
        />
      </div>
      <ScrollNav
        categories={filteredMenuItems.map((menuItem) =>
          menuItem.items.length > 1 ? menuItem.category : ""
        )}
      />
      {filteredMenuItems.map((menu) =>
        menu.items.length > 0 ? (
          <div
            key={menu.category.replaceAll(" ", "")}
            id={menu.category}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">{menu.category}</h3>
            <div className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {menu.items.map((item) => (
                <MenuItemCard
                  key={item.id}
                  restaurant_id={id}
                  restaurant_name={name}
                  restaurant_image={image}
                  {...item}
                />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default MenuItems;
