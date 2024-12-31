'use client';

import Link from "next/link";
import { useCart } from "../context/cartdcontext";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Calculate cart summary
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <ul className="divide-y divide-gray-200">
              {cart.map((item: any) => (
                <li key={item.id} className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  {/* Product Image and Name */}
                  <div className="flex items-center space-x-4 flex-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 object-contain rounded-lg"
                    />
                    <div>
                      <span className="text-lg font-medium">{item.name}</span>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)} (Unit Price)</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <Button
  onClick={() => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  }}
  className=" rounded-md px-4 py-2 border border-gray-300 hover:bg-gray-100 transition-colors"

>
  -
</Button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <Button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"

                    >
                      +
                    </Button>
                  </div>

                  {/* Total Price and Remove Button */}
                  <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <p className="text-lg font-semibold min-w-[100px] text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors min-w-[80px] text-right"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Cart Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit lg:h-auto">
            <h2 className="text-xl font-bold mb-6">Cart Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t pt-4">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="mt-6 inline-block w-full bg-black text-white px-6 py-3 rounded-lg text-center hover:bg-gray-900 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage