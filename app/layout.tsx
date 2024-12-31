import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/NavBar'; // Import Navbar
import Footer from '@/components/Footer'; // Import Footer
import { CartProvider } from "./context/cartdcontext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "ShopEase - Your One-Stop Online Shopping Destination",
  description: "Discover a seamless shopping experience with ShopEase. Explore a wide range of products, exclusive deals, and fast delivery tailored just for you.",
  keywords: ["ShopEase", "online shopping", "ecommerce", "deals", "fast delivery"],
  openGraph: {
    title: "ShopEase - Your One-Stop Online Shopping Destination",
    description: "Discover a seamless shopping experience with ShopEase. Explore a wide range of products, exclusive deals, and fast delivery tailored just for you.",
    url: "https://www.shopease.com",
    siteName: "ShopEase",
    images: [
      {
        url: "https://www.shopease.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShopEase - Your One-Stop Online Shopping Destination",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopEase - Your One-Stop Online Shopping Destination",
    description: "Discover a seamless shopping experience with ShopEase. Explore a wide range of products, exclusive deals, and fast delivery tailored just for you.",
    images: ["https://www.shopease.com/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
           <CartProvider>
            <Navbar />
          {children}
          <Footer />
          </CartProvider>

      </body>
    </html>
  );
}
