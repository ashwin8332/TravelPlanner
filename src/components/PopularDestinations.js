import { motion } from 'framer-motion';
import ImageWithFallback from './ImageWithFallback';

function PopularDestinations() {
  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Beautiful white buildings and stunning sunsets over the Aegean Sea",
      rating: 4.9,
      tours: 127,
      price: "From $89/day"
    },
    {
      id: 2,
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ancient temples, traditional culture, and beautiful cherry blossoms",
      rating: 4.8,
      tours: 95,
      price: "From $75/day"
    },
    {
      id: 3,
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Ancient Incan citadel high in the Andes Mountains",
      rating: 4.9,
      tours: 73,
      price: "From $120/day"
    },
    {
      id: 4,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Modern architecture, luxury shopping, and desert adventures",
      rating: 4.7,
      tours: 156,
      price: "From $95/day"
    },
    {
      id: 5,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Tropical paradise with rich Hindu culture and pristine beaches",
      rating: 4.8,
      tours: 198,
      price: "From $45/day"
    },
    {
      id: 6,
      name: "Iceland",
      image: "https://content.icelandtravel.is/wp-content/uploads/2018/04/countless-craters-of-reykjanes-peninsula-1300x867.jpg",
      description: "Northern lights, geysers, and dramatic volcanic landscapes",
      rating: 4.9,
      tours: 84,
      price: "From $110/day"
    },
    {
      id: 7,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Crystal clear waters, overwater bungalows, and coral reefs",
      rating: 4.9,
      tours: 67,
      price: "From $200/day"
    },
    {
      id: 8,
      name: "Tuscany, Italy",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Rolling hills, vineyards, Renaissance art, and culinary delights",
      rating: 4.8,
      tours: 142,
      price: "From $85/day"
    },
    {
      id: 9,
      name: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Majestic mountains, pristine lakes, and charming alpine villages",
      rating: 4.9,
      tours: 89,
      price: "From $130/day"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the world's most breathtaking destinations, handpicked by our travel experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 6).map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
                  <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {destination.tours} tours available
                  </span>
                  <motion.button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Destinations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default PopularDestinations;