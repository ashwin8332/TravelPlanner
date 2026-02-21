import { motion } from 'framer-motion';

function TravelGuides() {
  const guides = [
    {
      id: 1,
      title: "Ultimate Guide to Southeast Asia",
      destination: "Southeast Asia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2-4 weeks",
      budget: "$1,500 - $3,000",
      highlights: ["Temple hopping in Cambodia", "Street food in Thailand", "Beaches in Philippines"],
      readTime: "15 min read",
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "European Capitals in 10 Days",
      destination: "Europe",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "10 days",
      budget: "$2,500 - $4,000",
      highlights: ["Museums in Paris", "Architecture in Prague", "Nightlife in Berlin"],
      readTime: "12 min read",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "African Safari Adventure",
      destination: "East Africa",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1-2 weeks",
      budget: "$3,000 - $6,000",
      highlights: ["Big Five in Kenya", "Serengeti Migration", "Zanzibar beaches"],
      readTime: "20 min read",
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Japan: Traditional & Modern",
      destination: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2 weeks",
      budget: "$3,500 - $5,500",
      highlights: ["Cherry blossoms in Kyoto", "Tokyo tech culture", "Mount Fuji hiking"],
      readTime: "18 min read",
      difficulty: "Intermediate"
    },
    {
      id: 5,
      title: "South American Backpacking",
      destination: "South America",
      image: "https://images.unsplash.com/photo-1531986362435-16b427eb9c26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3-6 weeks",
      budget: "$2,000 - $4,500",
      highlights: ["Machu Picchu trek", "Buenos Aires tango", "Amazon rainforest"],
      readTime: "25 min read",
      difficulty: "Advanced"
    },
    {
      id: 6,
      title: "Mediterranean Island Hopping",
      destination: "Mediterranean",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "10-14 days",
      budget: "$2,000 - $3,500",
      highlights: ["Greek island sunsets", "Italian coastal drives", "Spanish beach culture"],
      readTime: "14 min read",
      difficulty: "Beginner"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-yellow-100 text-yellow-800",
      Advanced: "bg-red-100 text-red-800"
    };
    return colors[difficulty] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Travel Guides & Itineraries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive guides to help you plan your perfect adventure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {guide.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{guide.destination}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Duration:</span> {guide.duration}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Budget:</span> {guide.budget}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {guide.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Read Full Guide
                </motion.button>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Itinerary?</h3>
            <p className="text-blue-100 mb-6">
              Our travel experts can create a personalized itinerary based on your preferences, budget, and travel style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Itinerary
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse More Guides
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TravelGuides;