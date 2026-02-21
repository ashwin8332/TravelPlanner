import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

function FestivalSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const festivals = [
    {
      id: 1,
      name: "Sankranti & Pongal Special",
      location: "Tamil Nadu",
      type: "Winter Festival",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 15000,
      startDate: new Date(2025, 0, 14),
      endDate: new Date(2025, 0, 16),
      description: "Experience the vibrant harvest festivals of Tamil Nadu with traditional celebrations."
    },
    {
      id: 2,
      name: "Republic Day Special",
      location: "Delhi",
      type: "Winter Festival",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 15000,
      startDate: new Date(2025, 0, 26),
      endDate: new Date(2025, 0, 28),
      description: "Witness the grand Republic Day parade in Delhi and explore historic monuments."
    },
    {
      id: 3,
      name: "Holi Special",
      location: "Jaipur",
      type: "Spring Festival",
      image: "https://images.unsplash.com/photo-1582647845753-438d721d6b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 12000,
      startDate: new Date(2025, 2, 25),
      endDate: new Date(2025, 2, 27),
      description: "Celebrate the festival of colors in the Pink City with traditional festivities."
    },
    {
      id: 4,
      name: "Independence Day Special",
      location: "Delhi",
      type: "Monsoon Festival",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 10000,
      startDate: new Date(2025, 7, 15),
      endDate: new Date(2025, 7, 17),
      description: "Be part of Independence Day celebrations and explore India's capital."
    },
    {
      id: 5,
      name: "Ganesh Chaturthi Special",
      location: "Mumbai",
      type: "Monsoon Festival",
      image: "https://source.unsplash.com/800x600/?ganesh,mumbai",
      price: 10000,
      startDate: new Date(2025, 8, 7),
      endDate: new Date(2025, 8, 18),
      description: "Experience the grand Ganesh Chaturthi celebrations in Mumbai."
    },
    {
      id: 6,
      name: "Festival of Lights Tour",
      location: "Uttar Pradesh",
      type: "Diwali Special",
      image: "https://source.unsplash.com/800x600/?diwali,lights",
      price: 18000,
      startDate: new Date(2025, 9, 15),
      endDate: new Date(2025, 10, 15),
      description: "Experience the magical Diwali celebrations at iconic monuments."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % festivals.length);
  }, [festivals.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + festivals.length) % festivals.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleBookPackage = (festival) => {
    const today = new Date();
    if (festival.startDate < today) {
      alert("This festival has already passed. Please check our upcoming packages.");
      return;
    }

    const confirmMessage = `
      Package Details:
      Name: ${festival.name}
      Location: ${festival.location}
      Duration: ${Math.ceil((festival.endDate - festival.startDate) / (1000 * 60 * 60 * 24)) + 1} days
      Price: ₹${festival.price}
      Dates: ${festival.startDate.toLocaleDateString('en-IN')} to ${festival.endDate.toLocaleDateString('en-IN')}
      
      Would you like to add this to your itinerary?
    `;

    if (window.confirm(confirmMessage)) {
      // You can add logic here to add to itinerary
      alert("Package added to your itinerary!");
    }
  };

  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Festival Packages</h2>
          <p className="text-xl text-gray-300">Experience India's vibrant festivals and cultural celebrations</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Previous Card */}
              <motion.div
                className="hidden md:block opacity-60 transform scale-90"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.6 }}
                transition={{ duration: 0.5 }}
              >
                <FestivalCard
                  festival={festivals[(currentSlide - 1 + festivals.length) % festivals.length]}
                  onBook={handleBookPackage}
                  isActive={false}
                />
              </motion.div>

              {/* Active Card */}
              <motion.div
                className="transform scale-100"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FestivalCard
                  festival={festivals[currentSlide]}
                  onBook={handleBookPackage}
                  isActive={true}
                />
              </motion.div>

              {/* Next Card */}
              <motion.div
                className="hidden md:block opacity-60 transform scale-90"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.6 }}
                transition={{ duration: 0.5 }}
              >
                <FestivalCard
                  festival={festivals[(currentSlide + 1) % festivals.length]}
                  onBook={handleBookPackage}
                  isActive={false}
                />
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-opacity-30 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {festivals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FestivalCard({ festival, onBook, isActive }) {
  const getTypeColor = (type) => {
    const colors = {
      "Winter Festival": "bg-blue-600",
      "Spring Festival": "bg-green-600", 
      "Monsoon Festival": "bg-teal-600",
      "Diwali Special": "bg-yellow-600"
    };
    return colors[type] || "bg-gray-600";
  };

  return (
    <motion.div
      className={`relative h-96 rounded-lg shadow-xl overflow-hidden cursor-pointer ${
        isActive ? 'transform scale-105' : ''
      }`}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(15, 32, 39, 0.8), rgba(32, 58, 67, 0.3), rgba(44, 83, 100, 0.3)), url(${festival.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      whileHover={{ scale: isActive ? 1.07 : 1.02 }}
      onClick={() => onBook(festival)}
    >
      <div className="absolute inset-0 flex flex-col justify-end">
        <span className={`${getTypeColor(festival.type)} text-white px-4 py-2 text-sm uppercase tracking-wider font-semibold rounded-r-lg self-start mb-4`}>
          {festival.type}
        </span>
        
        <div className="p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{festival.name}</h3>
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{festival.location}</span>
          </div>
          <p className="text-sm text-gray-200 mb-4">{festival.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <div className="font-semibold">₹{festival.price.toLocaleString()}</div>
              <div className="text-gray-300">
                {festival.startDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} - 
                {festival.endDate.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              </div>
            </div>
            
            <motion.button
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onBook(festival);
              }}
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FestivalSlider;