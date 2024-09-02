import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingCartIcon,
  UsersIcon,
  UtensilsIcon,
  LayoutDashboardIcon,
  BikeIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Eazy Eats | Admin",
  description: "Eazy Eats | Admin page",
};

const nav = [
  {
    value: "/",
    label: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    value: "restaurants",
    label: "Restaurants",
    icon: UtensilsIcon,
  },
  {
    value: "orders",
    label: "Orders",
    icon: ShoppingCartIcon,
  },
  {
    value: "couriers",
    label: "Couriers",
    icon: BikeIcon,
  },
  {
    value: "customers",
    label: "Customers",
    icon: UsersIcon,
  },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="bg-gray-100 py-4 px-6">
        <ul className="flex space-x-8">
          {nav.map(({ value, label, icon: Icon }) => (
            <li key={value}>
              <Link
                href={`/admin/${value}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}
