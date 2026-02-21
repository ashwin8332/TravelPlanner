import { motion } from 'framer-motion';
function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-6"
          >
            About TravelPlanner
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Your trusted companion for discovering the world's most incredible destinations and creating unforgettable travel experiences.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, TravelPlanner was born from a simple idea: travel planning should be exciting, not overwhelming. Our founders, passionate travelers themselves, noticed how difficult it was to organize trips that truly captured the essence of each destination.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we've helped over 100,000 travelers create memories that last a lifetime. From solo adventures to family vacations, honeymoons to business trips, we're here to make your travel dreams come true.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">100K+</div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <img
                src="https://happydaystravelblog.com/wp-content/uploads/2024/04/Travel-collage.png"
                alt="Travel Planning"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">5.0</div>
                <div className="text-gray-600">Rating</div>
                <div className="flex text-yellow-400">
                  ★★★★★
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize travel by making it accessible, affordable, and absolutely amazing for everyone. We believe that every journey should be transformative and every destination should be discovered with wonder.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="bg-purple-50 p-8 rounded-lg"
            >
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the world's most trusted travel companion, empowering millions of people to explore the world with confidence, curiosity, and cultural appreciation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your perfect trips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://thumbs.dreamstime.com/b/girl-touch-long-brunette-hair-natural-landscape-woman-makeup-face-sunny-day-skin-care-youth-health-concept-fashion-122717601.jpg",
                description: "Travel enthusiast with 15+ years in the industry"
              },
              {
                name: "Vishnu Kumar",
                role: "Head of Product",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQDZnqeYLvHtq23KLKBBm0wpXhDpj2Rn0Ig&s",
                description: "Former Google engineer passionate about user experience"
              },
              {
                name: "Emily Rodriguez",
                role: "Travel Expert",
                image: "https://www.shutterstock.com/image-photo/woman-traveler-portrait-against-tea-600nw-2159485957.jpg",
                description: "Visited 80+ countries and counting"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🌍",
                title: "Sustainability",
                description: "We promote responsible travel that preserves our planet for future generations."
              },
              {
                icon: "🤝",
                title: "Authenticity",
                description: "We connect travelers with genuine local experiences and cultural immersion."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We continuously improve our platform with cutting-edge technology and insights."
              },
              {
                icon: "❤️",
                title: "Community",
                description: "We build lasting relationships with travelers, locals, and partners worldwide."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;