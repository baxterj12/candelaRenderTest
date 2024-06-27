'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from './cart'; // Adjust the path if necessary

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}