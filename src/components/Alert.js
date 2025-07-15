import React from 'react';
import { useNotification } from '../context/NotificationContext';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const Alert = () => {
  const { notification } = useNotification();

  if (!notification) {
    return null;
  }

  const { message, type } = notification;

  // Define styles based on the notification type to mimic Bootstrap alerts
  const baseClasses = 'fixed top-20 right-5 p-4 rounded-lg shadow-lg flex items-center z-50 animate-fade-in-down';
  const typeClasses = {
    success: 'bg-green-100 border border-green-400 text-green-700',
    error: 'bg-red-100 border border-red-400 text-red-700',
  };
  const Icon = type === 'success' ? CheckCircleIcon : XCircleIcon;

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <Icon className="h-6 w-6 mr-3" />
      <span>{message}</span>
    </div>
  );
};

export default Alert;