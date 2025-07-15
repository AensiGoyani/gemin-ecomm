import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/solid';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal , clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-3  py-8 text-center">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="mt-4">Your cart is currently empty.</p>
        <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mr-4" />
              <div className="flex-grow">
                <Link to={`/product/${item.id}`} className="font-bold hover:text-blue-500">{item.title}</Link>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center border rounded mx-4"
                  min="1"
                />
                <p className="w-20 text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-gray-500 hover:text-red-500">
                  <XCircleIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
            <div className="flex justify-between mt-4">
                <button className="w-1/2 bg-red-500 text-white py-3 rounded hover:bg-red-600 font-bold" onClick={clearCart}>
                    Clear Cart
                </button>
               <Link to="/"> <button className=" ml-2 bg-green-500 text-white py-3 px-2  rounded hover:bg-green-600 font-bold">Continue Shopping</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
