'use client';
import { useEffect, useState } from 'react';
import axiosInstance from './utils/axiosInstance';
import Link from 'next/link';
import { useCart } from './context/cartdcontext';
import HeroSection from '@/components/Hero';

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8); // Initial number of products to display
  const { addToCart } = useCart(); // Get the addToCart function from the CartContext

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get('products')
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1, // Assuming adding 1 quantity for each product
      image: product.image,
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Load 8 more products
  };

  return (
    <div>
      <div className=" w-full">
        <HeroSection />
        <h1 className="text-3xl font-bold text-center mt-8 mb-6">Our Products</h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-gray-600">Loading products...</p>
          </div>
        ) : (
          <>
            <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 py-7 mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0, visibleCount).map((product) => (
                <div key={product.id}  className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                  <Link href={`/product/${product.id}`} passHref>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-56 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 truncate">{product.title}</h2>
                    <p className="text-gray-600 text-sm mt-2 truncate">{product.description}</p>
                    <p className="text-lg font-bold text-gray-900 mt-4">${product.price}</p>
                  </div>
                  <button
                  className="w-full bg-blue-600 text-white py-3 px-5 rounded-lg mt-6 font-medium hover:bg-blue-700 transition-all"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                </div>
              ))}
            </div>
            {visibleCount < products.length && (
              <div className="text-center mb-8">
                <button
                  className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-md shadow-lg transition-all"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
     
    </div>
  );
};

export default HomePage;
