import React, { createContext, useState, useContext, useCallback } from 'react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null); // Will hold { message: '...', type: 'success' | 'error' }

  // useCallback ensures the function reference doesn't change on every render
  const showNotification = useCallback((message, type = 'success') => {
    setNotification({ message, type });
    // Automatically hide the notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }, []);

  const value = { notification, showNotification };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};