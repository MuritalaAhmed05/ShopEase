'use client';

import Link from "next/link";
import { useCart } from "../context/cartdcontext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item:any) => (
            <li key={item.id} className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="h-16 w-16" />
                <span className="ml-4">{item.name}</span>
              </div>
              <div>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, +e.target.value)}
                  className="border p-1 w-16"
                />
                <button
                  className="ml-2 text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="bg-black text-white p-4">
        <Link href="/checkout">Procced to chwclkout</Link>
      </div>
    </div>
  );
};

export default CartPage;
