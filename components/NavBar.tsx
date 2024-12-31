"use client";
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/app/context/cartdcontext';
import { useState } from 'react';

export default function Header() {
  const { itemCount } = useCart(); // Get the cart item count
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="sticky bg-white  top-0 z-50 shadow-lg">
      {/* Header container */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10" />
          <Link href="/" className="text-2xl font-bold text-gray-800">
            ShopEase
          </Link>
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Button>
            {itemCount > 0 && (
              <span className="absolute top-[-4px] right-[-4px] bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          <Link href="/auth/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Icons (Cart and Hamburger Menu) */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Button>
            {itemCount > 0 && (
              <span className="absolute top-[-4px] right-[-4px] bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Hamburger Menu Icon */}
          <button onClick={toggleMobileMenu} className="text-gray-800">
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu (Slides in from the right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu}>
            <X size={30} />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4">
          {/* Cart Link */}
          <Link href="/cart" onClick={toggleMobileMenu} className="text-xl">
            Cart
          </Link>
          {/* Sign In Link */}
          <Link href="/auth/signin" onClick={toggleMobileMenu} className="text-xl">
            Sign In
          </Link>
          {/* Login Link */}
          <Link href="/auth/login" onClick={toggleMobileMenu} className="text-xl">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}