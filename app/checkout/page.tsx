'use client';

import { useCart } from '../context/cartdcontext';
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  
const CheckoutPage = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total cost of items in cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Set a fixed shipping fee, or you could dynamically calculate based on certain conditions
  const shippingFee = 5.99; // Example: fixed shipping fee
  const grandTotal = total + shippingFee; // Total including shipping fee

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate order placement
    console.log('Order Details:', {
      cart,
      customer: formData,
      total: grandTotal,
    });

    // Clear form and show confirmation
    setFormData({ name: '', email: '', address: '' });
    setOrderPlaced(true);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <a href="/" className="text-blue-500">Go back to shop</a>.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column (Form) */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Fill out your details</h3>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Label htmlFor="name" className="block font-medium">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block font-medium">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="address" className="block font-medium">Address</Label>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Place Order
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </div>

            {/* Right Column (Product Summary) */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold">Your Cart</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {cart.map((item) => (
                      <li key={item.id} className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                          <img
                            src={item.image}  // Add product image here
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded mr-4"
                          />
                          <span>{item.name} (x{item.quantity})</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-xl font-semibold">Subtotal: ${total.toFixed(2)}</div>
                  <div className="mt-2 text-lg font-semibold">Shipping Fee: ${shippingFee.toFixed(2)}</div>
                  <div className="mt-4 text-2xl font-bold">Total: ${grandTotal.toFixed(2)}</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {orderPlaced && (
            <div className="mt-8 p-4 bg-green-100 text-green-700 rounded">
              <p>Your order has been placed successfully! 🎉</p>
              <p>Thank you for shopping with us.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
