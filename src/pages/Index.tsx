
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SearchSection from '../components/SearchSection';
import FeaturedSchools from '../components/FeaturedSchools';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <HeroSection />
      <SearchSection />
      <StatsSection />
      <FeaturedSchools />
      <Footer />
    </div>
  );
};

export default Index;
