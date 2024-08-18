"use client";

import React, { useState } from "react";
import { Menu } from "@/shared/data";
import ScrollNav from "./ScrollNav";
import MenuItemCard from "./MenuItem";

type MenuProps = {
  menu: Menu[];
};

const MenuItems = ({ menu: menuItems }: MenuProps) => {
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
      <div className="mb-4">
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
        menu.items.length > 1 ? (
          <div
            key={menu.category.replaceAll(" ", "")}
            id={menu.category}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">{menu.category}</h3>
            <div className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {menu.items.map((item) => (
                <MenuItemCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default MenuItems;
