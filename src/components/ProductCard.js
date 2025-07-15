import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { HeartIcon as HeartIconOutline, HeartIcon as HeartIconSolid } from '@heroicons/react/24/outline';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
      <div className="border rounded-lg p-4 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-end">
          <button onClick={handleWishlistClick} className="text-blue-600 hover:text-blue-700">
            {isInWishlist(product.id) ? (
              <HeartIconSolid className="h-6 w-6 fill-current" />
            ) : (
              <HeartIconOutline className="h-6 w-6 stroke-current" />
            )}
          </button>
        </div>
        <Link to={`/product/${product.id}`} className="flex-grow">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
          <h3 className="font-bold text-lg truncate">{product.title}</h3>
          <p className="text-gray-500 capitalize">{product.category}</p>
          <p className="text-xl font-semibold my-2">${product.price}</p>
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
  );
};

export default ProductCard;