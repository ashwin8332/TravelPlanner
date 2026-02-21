import { motion } from 'framer-motion';

function TravelTips() {
  const tips = [
    {
      id: 1,
      icon: "🎒",
      title: "Pack Smart",
      description: "Pack light and bring versatile clothing. Roll clothes instead of folding to save space.",
      category: "Packing"
    },
    {
      id: 2,
      icon: "💰",
      title: "Budget Wisely",
      description: "Set aside 20% extra for unexpected expenses and always have multiple payment methods.",
      category: "Finance"
    },
    {
      id: 3,
      icon: "📱",
      title: "Download Offline Maps",
      description: "Download offline maps and translation apps before you travel to avoid roaming charges.",
      category: "Technology"
    },
    {
      id: 4,
      icon: "🏥",
      title: "Travel Insurance",
      description: "Always get comprehensive travel insurance. It's better to have it and not need it.",
      category: "Safety"
    },
    {
      id: 5,
      icon: "📋",
      title: "Research Local Customs",
      description: "Learn basic phrases and customs of your destination to show respect and enhance your experience.",
      category: "Culture"
    },
    {
      id: 6,
      icon: "⏰",
      title: "Arrive Early",
      description: "Arrive at airports and stations early. It reduces stress and gives you buffer time.",
      category: "Planning"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Packing: "bg-blue-100 text-blue-800",
      Finance: "bg-green-100 text-green-800",
      Technology: "bg-purple-100 text-purple-800",
      Safety: "bg-red-100 text-red-800",
      Culture: "bg-yellow-100 text-yellow-800",
      Planning: "bg-indigo-100 text-indigo-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Essential Travel Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice to make your travels smoother, safer, and more enjoyable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{tip.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-lg font-bold text-gray-800 mr-3">{tip.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(tip.category)}`}>
                      {tip.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{tip.description}</p>
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
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Want More Travel Tips?</h3>
            <p className="text-blue-100 mb-6">
              Join our community of travelers and get weekly tips, destination guides, and exclusive offers.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Newsletter
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TravelTips;