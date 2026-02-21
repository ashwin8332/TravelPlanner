import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './styles/fixes.css';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Itinerary from './pages/Itinerary';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const [customPlans, setCustomPlans] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToItinerary = (destination) => {
    if (!selectedDestinations.find(d => d.id === destination.id)) {
      setSelectedDestinations(prevDestinations => [...prevDestinations, {
        ...destination,
        dateAdded: new Date().toISOString(),
        status: 'planned'
      }]);
    }
  };
  const removeFromItinerary = (destinationId) => {
    setSelectedDestinations(prevDestinations => 
      prevDestinations.filter(d => d.id !== destinationId)
    );
  };
  const toggleFavorite = (destinationId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(destinationId)) {
        return prevFavorites.filter(id => id !== destinationId);
      } else {
        return [...prevFavorites, destinationId];
      }
    });
  };
  const addCustomPlan = (plan) => {
    setCustomPlans(prevPlans => [...prevPlans, {
      ...plan,
      id: Date.now(),
      dateAdded: new Date().toISOString(),
      status: 'planned'
    }]);
  };
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    selectedDestinations={selectedDestinations}
                    customPlans={customPlans}
                    onAddCustomPlan={addCustomPlan}
                  />
                } 
              />
              <Route 
                path="/destinations" 
                element={
                  <div className="container mx-auto px-4 py-8">
                    <Destinations 
                      onAddToItinerary={addToItinerary}
                      onToggleFavorite={toggleFavorite}
                      favorites={favorites}
                    />
                  </div>
                } 
              />
              <Route 
                path="/itinerary" 
                element={
                  <div className="container mx-auto px-4 py-8">
                    <Itinerary 
                      selectedDestinations={selectedDestinations}
                      customPlans={customPlans}
                      onRemoveDestination={removeFromItinerary}
                      onAddCustomPlan={addCustomPlan}
                    />
                  </div>
                } 
              />
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
    </ErrorBoundary>
  );
}
export default App;