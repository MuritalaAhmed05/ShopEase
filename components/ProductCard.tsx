// src/components/ProductCard.tsx
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
}

const ProductCard = ({ title, price, description, image }: ProductCardProps) => {
  return (
    <Card className="w-60 p-4 bg-white shadow-md rounded-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
      <p className="mt-2 font-bold text-gray-800">${price}</p>
    </Card>
  );
};

export default ProductCard;
