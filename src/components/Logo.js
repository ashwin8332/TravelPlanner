import React from 'react';

const Logo = ({ className = "text-2xl font-bold", showIcon = true, showText = true }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showIcon && (
        <div className="relative">
          {/* Airplane icon with gradient */}
          <svg 
            className="w-8 h-8 text-blue-600" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#logoGradient)"
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            />
          </svg>
          {/* Small world/globe accent */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
        </div>
      )}
      {showText && (
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
          TravelPlanner
        </span>
      )}
    </div>
  );
};

export default Logo;