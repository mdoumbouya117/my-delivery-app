import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardListIcon, UsersIcon, UtensilsIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Eazy Eats | Admin",
  description: "Eazy Eats | Admin page",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="bg-gray-100 py-4 px-6">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/admin/orders"
              className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
            >
              <ClipboardListIcon className="h-5 w-5" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/restaurants"
              className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
            >
              <UtensilsIcon className="h-5 w-5" />
              <span>Restaurants</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/customers"
              className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
            >
              <UsersIcon className="h-5 w-5" />
              <span>Customers</span>
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
