import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageWithFallback from './ImageWithFallback';

function EnhancedHero({ stats, onQuickPlan, showQuickForm, setShowQuickForm, quickPlanForm, setQuickPlanForm }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuickPlanForm(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickPlanSubmit = (e) => {
    e.preventDefault();
    if (quickPlanForm.destination && quickPlanForm.startDate) {
      onQuickPlan({
        ...quickPlanForm,
        endDate: quickPlanForm.startDate,
        budget: '',
        travelers: '1'
      });
      setQuickPlanForm({ destination: '', startDate: '', notes: '' });
      setShowQuickForm(false);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Multiple Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Base Background */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Beautiful mountain landscape with lake"
            className="w-full h-full"
            placeholder={false}
          />
        </div>
        
        {/* Overlay Background */}
        <div className="absolute inset-0 opacity-40">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tropical paradise with crystal clear water"
            className="w-full h-full"
            placeholder={false}
          />
        </div>
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-pink-900/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/10 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                scale: 0
              }}
              animate={{
                y: [null, -100, 100, -50],
                x: [null, 50, -50, 30],
                scale: [0, 1, 0.5, 1, 0],
                opacity: [0, 1, 0.7, 1, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
        {/* Main Title */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Discover
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Journey
            </span>
          </h1>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p 
          className="text-2xl md:text-3xl text-gray-100 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Embark on extraordinary adventures with our AI-powered travel planning platform. 
          <span className="text-blue-300 font-medium"> Your perfect journey awaits.</span>
        </motion.p>

        {/* Stats Dashboard */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          {[
            { value: stats.totalTrips, label: "Adventures Planned", icon: "🗺️", color: "from-yellow-400 to-orange-500" },
            { value: stats.upcomingTrips, label: "Dreams Coming True", icon: "✈️", color: "from-green-400 to-emerald-500" },
            { value: stats.savedDestinations, label: "Destinations Explored", icon: "🌍", color: "from-blue-400 to-purple-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 + index * 0.2, type: "spring", bounce: 0.5 }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xl text-gray-200 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-center gap-8 mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setShowQuickForm(!showQuickForm)}
            className="group bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 border-2 border-emerald-400/50"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center space-x-3">
              <span>🚀</span>
              <span>Start Planning</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
          
          <Link
            to="/destinations"
            className="group bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 border-2 border-blue-400/50 inline-block"
          >
            <motion.span
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3"
            >
              <span>🌍</span>
              <span>Explore Destinations</span>
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                ✨
              </motion.span>
            </motion.span>
          </Link>
          
          <Link
            to="/itinerary"
            className="group bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 border-2 border-purple-400/50 inline-block"
          >
            <motion.span
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center space-x-3"
            >
              <span>📋</span>
              <span>My Itinerary</span>
              <span>💫</span>
            </motion.span>
          </Link>
        </motion.div>

        {/* Quick Plan Form */}
        {showQuickForm && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center space-x-3">
              <span>✈️</span>
              <span>Quick Trip Planner</span>
              <span>🗺️</span>
            </h3>
            <form onSubmit={handleQuickPlanSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium mb-3 text-gray-200">
                    🌍 Where to?
                  </label>
                  <input
                    type="text"
                    name="destination"
                    placeholder="Enter your dream destination..."
                    value={quickPlanForm.destination}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/20 placeholder-gray-300 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-all text-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium mb-3 text-gray-200">
                    📅 When?
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={quickPlanForm.startDate}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-white/20 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-all text-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium mb-3 text-gray-200">
                  📝 Special Preferences
                </label>
                <textarea
                  name="notes"
                  placeholder="Tell us about your perfect trip... adventure, relaxation, culture, food?"
                  value={quickPlanForm.notes}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-white/20 placeholder-gray-300 text-white border border-white/30 focus:border-white/60 focus:outline-none transition-all resize-none text-lg"
                />
              </div>
              <div className="flex gap-6">
                <motion.button
                  type="submit"
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all font-bold text-lg shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 Create My Trip
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setShowQuickForm(false)}
                  className="px-8 py-4 bg-white/20 text-white rounded-2xl hover:bg-white/30 transition-all font-bold text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ✕ Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/70 text-center"
          >
            <div className="text-sm mb-2">Discover More</div>
            <div className="text-2xl">↓</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default EnhancedHero;