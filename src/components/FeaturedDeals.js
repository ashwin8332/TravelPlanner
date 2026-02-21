import { motion } from 'framer-motion';

function FeaturedDeals() {
  const deals = [
    {
      id: 1,
      title: "Bali Paradise Package",
      originalPrice: 1899,
      discountedPrice: 1299,
      discount: 32,
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "7 Days / 6 Nights",
      includes: ["Flights", "5-Star Resort", "Breakfast", "Airport Transfer"],
      location: "Bali, Indonesia",
      rating: 4.8,
      reviews: 245,
      validUntil: "2024-03-31",
      featured: true
    },
    {
      id: 2,
      title: "European Capitals Tour",
      originalPrice: 2499,
      discountedPrice: 1899,
      discount: 24,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZ4JewTBnkHcQQvpQ7ZzoBg34leVKk7sJqA&s",
      duration: "10 Days / 9 Nights",
      includes: ["Flights", "Hotels", "City Tours", "Train Tickets"],
      location: "Paris, Prague, Vienna",
      rating: 4.9,
      reviews: 189,
      validUntil: "2024-04-15",
      featured: false
    },
    {
      id: 3,
      title: "Tokyo Adventure",
      originalPrice: 1699,
      discountedPrice: 1399,
      discount: 18,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "6 Days / 5 Nights",
      includes: ["Flights", "Boutique Hotel", "JR Pass", "Cultural Tours"],
      location: "Tokyo, Japan",
      rating: 4.7,
      reviews: 156,
      validUntil: "2024-05-20",
      featured: false
    },
    {
      id: 4,
      title: "Safari & Beach Combo",
      originalPrice: 3299,
      discountedPrice: 2599,
      discount: 21,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "12 Days / 11 Nights",
      includes: ["Flights", "Safari Lodge", "Beach Resort", "Game Drives"],
      location: "Kenya & Zanzibar",
      rating: 4.9,
      reviews: 98,
      validUntil: "2024-06-30",
      featured: true
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🔥 Featured Travel Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Limited-time offers on our most popular destinations. Book now and save big!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                deal.featured ? 'ring-2 ring-yellow-400' : ''
              }`}
              whileHover={{ y: -8 }}
            >
              {deal.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 font-bold text-sm">
                  ⭐ FEATURED DEAL ⭐
                </div>
              )}
              
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {deal.discount}% OFF
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {deal.duration}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{deal.title}</h3>
                <p className="text-blue-600 font-semibold mb-3 flex items-center">
                  📍 {deal.location}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-semibold ml-1">{deal.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({deal.reviews} reviews)</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 line-through text-sm">${deal.originalPrice}</span>
                    <span className="text-2xl font-bold text-green-600">${deal.discountedPrice}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    Valid until: {formatDate(deal.validUntil)}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Includes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {deal.includes.map((item, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Our travel experts can create a custom package tailored to your preferences and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.button>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Deals
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedDeals;