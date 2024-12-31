"use client"; // This tells Next.js to treat this component as a client-side component
import { useEffect, useState } from 'react';
import axiosInstance from '@/app/utils/axiosInstance';
import { useParams } from 'next/navigation'; // Use useParams instead of useRouter
import { useCart } from '@/app/context/cartdcontext'; 
const ProductDetailPage = () => {
  const [product, setProduct] = useState<any>(null);
  const params = useParams(); // Use useParams to get the dynamic route parameters
  const id = params.id; // Access the 'id' parameter from the URL
  const { addToCart } = useCart(); // Get the addToCart function from the CartContext

  useEffect(() => {
    console.log('Product ID:', id); // Check the ID value
    if (id) {
      axiosInstance
        .get(`products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error('Error fetching product:', err));
    }
  }, [id]);

  if (!product) {
    return ( <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-gray-600">Loading products...</p>
      </div>);
  }
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,  // Assuming adding 1 quantity for each product
      image: product.image,
    });
  };


  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img src={product.image} alt={product.title} className="w-full h-72 object-contain" />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          <p className="text-lg font-bold text-gray-900 mt-4">${product.price}</p>
          <button
                    className="text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md transition-all"
                    onClick={() => handleAddToCart(product)} // Call the function when clicked
                  >
                    Add to Cart
                  </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;