import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { getAllCategories } from "../api/fakeStoreApi";
import {
  ShoppingBagIcon,
  HeartIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from '../image/logo.png';

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const { user, isUserLoggedIn, logout } = useAuth();
  const { getCartItemCount, clearCart } = useCart();
  const { clearWishlist } = useWishlist();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    clearCart();
    clearWishlist();
    alert("Logged out successfully!");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const activeLinkStyle = {
    color: "#3b82f6", // blue-500
    fontWeight: "bold",
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl  flex items-center text-gray-800">
            <img src={Logo} className="w-[50px] h-[50px]"/> <p className="pl-2">E-Shop</p>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="hover:text-blue-500"
            >
              Home
            </NavLink>
            <div className="relative group">
              <span className="hover:text-blue-500 cursor-pointer">
                Categories
              </span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                {categories.map((category) => (
                  <NavLink
                    key={category}
                    to={`/category/${category}`}
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : undefined
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
                  >
                    {category}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="hover:text-blue-500"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="hover:text-blue-500"
            >
              Contact
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
             <Link to="/wishlist" className="text-gray-600 hover:text-blue-500">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-blue-500"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
            {isUserLoggedIn() ? (
              <div className="flex items-center space-x-2">
                <span onClick={handleLogout} className="cursor-pointer sm:inline text-gray-700 text-sm">{user.username}</span>
                {/* <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-blue-500"
                  title="Logout"
                >
                  <UserCircleIcon className="h-6 w-6" />
                </button> */}
              </div>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-blue-500" title="Login">
                <UserCircleIcon className="h-6 w-6" />
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="block py-2 hover:text-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <h3 className="text-gray-500 font-bold mt-2">Categories</h3>
            {categories.map((category) => (
              <NavLink
                key={category}
                to={`/category/${category}`}
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="block py-2 text-sm hover:bg-gray-100 capitalize"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category}
              </NavLink>
            ))}
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="block py-2 hover:text-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
