"use client";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col text-center hover:shadow-lg transition">
  <img
    src={product.image}
    alt={product.title}
    className="w-full h-48 rounded-md mb-3 object-scale-down"
  />
  <h2 className="font-semibold text-lg flex-grow">{product.title}</h2>
  <p className="text-gray-600 mb-3">${product.price.toFixed(2)}</p>

  <button
    onClick={() => addToCart(product)}
    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition mt-auto"
  >
    Add to Cart
  </button>
</div>

  );
}
