import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DestinationCard from '../components/DestinationCard';
// Sample destinations data (in a real app, this would come from an API)
const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    description: 'The City of Light featuring iconic landmarks like the Eiffel Tower and world-class cuisine.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZ4JewTBnkHcQQvpQ7ZzoBg34leVKk7sJqA&s'
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'A fascinating blend of ultra-modern and traditional, featuring amazing food and culture.',
    imageUrl: 'https://assets.cntraveller.in/photos/6352a8c00831d51e5aa10703/16:9/w_6000,h_3375,c_limit/tokyoGettyImages-1031467664.jpeg'
  },
  {
    id: 3,
    name: 'New York City, USA',
    description: 'The Big Apple offers world-famous attractions, diverse culture, and endless entertainment.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZAxbzuuOZ1Vphr9WGOLm7jb6C03TJVHAUDg&s'
  },
  // Add more destinations as needed
];
function Destinations({ onAddToItinerary, onToggleFavorite, favorites }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || 
                         (filterType === 'favorites' && favorites.includes(dest.id));
    return matchesSearch && matchesFilter;
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Explore Destinations</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search destinations..."
            className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />     
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="all">All Destinations</option>
            <option value="favorites">Favorites</option>
          </select>
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredDestinations.map(destination => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onAddToItinerary={onAddToItinerary}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(destination.id)}
          />
        ))}
      </motion.div>
      {filteredDestinations.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600 mt-8"
        >
          No destinations found matching your criteria.
        </motion.p>
      )}
    </motion.div>
  );
}
export default Destinations;