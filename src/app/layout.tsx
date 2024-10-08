import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/contexts/CartProvider";
import UserProviderWrapper from "@/components/UserProviderWrapper";

export const metadata: Metadata = {
  title: "Eazy Eats",
  description: "Eazy Eats app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <UserProviderWrapper>
            <Navbar />
            {children}
          </UserProviderWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
