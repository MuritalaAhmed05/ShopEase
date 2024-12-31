"use client";
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/app/context/cartdcontext';
import { useState } from 'react';

export default function Header() {
  const { itemCount } = useCart(); // Get the cart item count
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md sticky w-full ">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <img src="/logo.png" alt="logo" className="h-10" />
          <Link href="/" className="text-2xl font-bold text-gray-800">
            ShopEase
          </Link>
        </div>

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

        {/* Mobile Menu Icon */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Background Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white/90 backdrop-blur-sm shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-40`}
      >
        <div className='flex justify-between px-4'>
          <div className='flex items-center gap-2'>
            <img src="/logo.png" alt="logo" className="h-10" />
            <Link href="/" className="text-2xl font-bold text-gray-800">
              ShopEase
            </Link>
          </div>

          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-6 space-y-4 bg-white">
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
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="w-full">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
