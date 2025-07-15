import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNotification } from './NotificationContext';

// 1. Create Context
const CartContext = createContext();

// Custom hook to use the cart context for cleaner component code
export const useCart = () => {
  return useContext(CartContext);
};

// 2. Create Provider Component
export const CartProvider = ({ children }) => {
  const { showNotification } = useNotification();
  // Initialize state from localStorage to persist cart across sessions
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart items from localStorage", error);
      return [];
    }
  });

  // Persist cart state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    showNotification(`"${product.title}" was added to your cart!`);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const getCartTotal = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const getCartItemCount = () => cartItems.reduce((count, item) => count + item.quantity, 0);

    const clearCart = () => {
        setCartItems([]);
    };

  const value = { cartItems, addToCart, removeFromCart, updateQuantity, getCartTotal, getCartItemCount, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};