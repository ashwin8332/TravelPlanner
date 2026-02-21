import React from 'react';
import Logo from './Logo';

const LoadingSpinner = ({ message = "Loading your travel experience..." }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated logo container */}
        <div className="relative mb-8">
          <div className="animate-bounce">
            <Logo className="text-4xl font-bold" />
          </div>
          {/* Spinning ring around logo */}
          <div className="absolute inset-0 -m-4">
            <div className="w-24 h-24 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Loading message */}
        <p className="text-gray-600 text-lg animate-pulse">{message}</p>
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;