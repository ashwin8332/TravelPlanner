import { motion } from 'framer-motion';

function DestinationCard({ destination, onAddToItinerary, onToggleFavorite, isFavorite }) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.02, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(destination.id)}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isFavorite ? 'bg-red-500' : 'bg-white'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isFavorite ? 'text-white' : 'text-red-500'}`}
            fill={isFavorite ? 'currentColor' : 'none'}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
        <p className="mt-2 text-gray-600">{destination.description}</p>
        <motion.button
          onClick={() => onAddToItinerary(destination)}
          className="mt-4 w-full bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Itinerary
        </motion.button>
      </div>
    </motion.div>
  );
}

export default DestinationCard;