import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; // You might need to adjust the path
import { XCircleIcon } from '@heroicons/react/24/solid';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto  py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">Your wishlist is empty.</p>
          <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map(product => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              {/* <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
              >
                Remove
              </button> */}
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default WishlistPage;