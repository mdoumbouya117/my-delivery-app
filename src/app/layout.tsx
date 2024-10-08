import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/contexts/CartProvider";
import UserProviderWrapper from "@/components/UserProviderWrapper";
import { Toaster } from "@/components/ui/sonner";

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
            <Toaster position="top-right" theme="system" closeButton />
            {children}
          </UserProviderWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
