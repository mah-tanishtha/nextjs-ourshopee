"use client";
import { useCart } from "@/context/CartContext";
import QuantityControl from "@/components/QuantityControl";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return <p className="text-center py-8 text-gray-500">Your cart is empty 🛍️</p>;
  }

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 rounded-md" />
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <QuantityControl
              quantity={item.quantity}
              onIncrease={() => increaseQty(item.id)}
              onDecrease={() => decreaseQty(item.id)}
            />
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right space-y-2">
        <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <div className="flex justify-end gap-3">
          <button onClick={clearCart} className="bg-gray-300 px-4 py-2 rounded-lg">Clear Cart</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
