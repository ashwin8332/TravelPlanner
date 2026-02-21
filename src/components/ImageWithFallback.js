import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageWithFallback = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  placeholder = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const getPlaceholderImage = () => {
    // Generate a beautiful gradient placeholder based on the alt text
    const colors = [
      'from-blue-400 to-purple-500',
      'from-green-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-yellow-400 to-orange-500',
      'from-indigo-400 to-purple-500',
      'from-pink-400 to-red-500'
    ];
    
    const colorIndex = alt ? alt.length % colors.length : 0;
    const gradientClass = colors[colorIndex];
    
    return (
      <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex items-center justify-center`}>
        <div className="text-center text-white p-4">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm font-medium opacity-90">
            {alt || 'Image'}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {/* Loading skeleton */}
      {isLoading && placeholder && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-8 h-8 mx-auto mb-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <p className="text-xs">Loading...</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Error state or fallback */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0">
          {getPlaceholderImage()}
        </div>
      )}

      {/* Main image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* Fallback image */}
      {hasError && fallbackSrc && (
        <img
          src={fallbackSrc}
          alt={alt}
          onLoad={handleLoad}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default ImageWithFallback;