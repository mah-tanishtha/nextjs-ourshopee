"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 bg-white shadow-md mb-4">
      <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">MiniShop</Link>
        <Link href="/cart" className="relative text-gray-700">
          🛒 Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
