import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isUserLoggedIn } = useAuth();

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return isUserLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;