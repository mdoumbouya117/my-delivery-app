"use client";

import Link from "next/link";
import CartPanel from "@/components/CartPanel";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav
      className="bg-white shadow-md text-black px-4 sm:px-6 md:px-8"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Go to Eazy Delivery home page"
            className="flex items-center"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Eazy Delivery
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/signin"
            aria-label="Sign in to your account"
            className="bg-primary px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </Link>
          <CartPanel
            sheetTrigger={
              <div
                className="relative cursor-pointer"
                aria-label="Shopping cart with 0 items"
              >
                <ShoppingCartIcon
                  className="h-6 w-6 text-gray-800"
                  aria-hidden="true"
                />
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                  {cartCount}
                </span>
              </div>
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
