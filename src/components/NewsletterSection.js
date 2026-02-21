import { motion } from 'framer-motion';

function NewsletterSection() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      e.target.reset();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Travel Insights
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest travel tips, destination guides, and exclusive offers delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <motion.button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-r-lg hover:bg-orange-600 transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>
        
        <p className="text-blue-100 text-sm mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </motion.section>
  );
}

export default NewsletterSection;