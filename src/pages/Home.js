import React, { useState } from 'react';
import '../styles/enhanced.css';
import EnhancedHero from '../components/EnhancedHero';
import PopularDestinations from '../components/PopularDestinations';
import FeaturedDeals from '../components/FeaturedDeals';
import FestivalSlider from '../components/FestivalSlider';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection';
const Home = () => {
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [quickPlanForm, setQuickPlanForm] = useState({
    destination: '',
    startDate: '',
    notes: ''
  });

  const stats = {
    totalTrips: 127,
    upcomingTrips: 3,
    savedDestinations: 15
  };

  const handleQuickPlan = (planData) => {
    console.log('Quick plan created:', planData);
    // Add logic to handle the quick plan
  };
  return (
    <div className="home">
      <EnhancedHero 
        stats={stats}
        onQuickPlan={handleQuickPlan}
        showQuickForm={showQuickForm}
        setShowQuickForm={setShowQuickForm}
        quickPlanForm={quickPlanForm}
        setQuickPlanForm={setQuickPlanForm}
      />
      <PopularDestinations />
      <FeaturedDeals />
      <AboutSection />
      <FestivalSlider />
      <Testimonials />
    </div>
  );
};

export default Home;