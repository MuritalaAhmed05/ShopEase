import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-r from-blue-500 to-indigo-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center text-center md:text-left">
      {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <img 
                src="/logo.png" 
                alt="ShopEase Logo" 
                className="h-12 w-12"
              />
              <span className="text-white text-xl font-bold">ShopEase</span>
            </div>
            <p className="text-sm">
              Your one-stop destination for all your shopping needs. We make shopping easy, reliable, and enjoyable.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-400" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-400" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-red-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'Categories', 'New Arrivals', 'Sale', 'My Account'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                'Track Order',
                'Shipping Policy',
                'Returns & Exchanges',
                'FAQ',
                'Contact Us',
                'Privacy Policy'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span>123 Shopping Street, Fashion Avenue, ST 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>support@shopease.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm">
              © {new Date().getFullYear()} ShopEase. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;