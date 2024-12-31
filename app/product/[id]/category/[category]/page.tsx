"use client"; // This tells Next.js to treat this component as a client-side component
import { useEffect, useState } from "react";
import axiosInstance from "@/app/utils/axiosInstance"; // Assuming you have axiosInstance configured
import { useRouter } from "next/navigation"; // Use useRouter to handle navigation
import { useCart } from "@/app/context/cartdcontext"; // Assuming you're using cart context

const CategoryPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    axiosInstance
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleCategoryClick = (category: string) => {
    setLoading(true);
    axiosInstance
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Categories Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-1 text-nowrap text-center">
          Explore Categories
        </h2>
        <p className="text-xl text-gray-600 text-center mx-auto mb-8">
            Find exactly what you're looking for across our extensive collection of products
          </p>
        <div className="grid items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              className="text-nowrap w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:-translate-y-1"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
            <p className="ml-4 text-lg text-gray-600 font-medium">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain mb-5 rounded-lg"
                />
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-gray-800 mt-5">${product.price}</p>
                <button
                  className="w-full bg-blue-600 text-white py-3 px-5 rounded-lg mt-6 font-medium hover:bg-blue-700 transition-all"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
