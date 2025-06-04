
import React from 'react';
import { Search, MapPin, Clock, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-10 lg:mb-0 animate-fade-in">
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 mr-2 text-green-400" />
              <span className="text-green-400 font-medium">Iyunga Ward, Mbeya City</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Find the Perfect
              <span className="text-green-400 block">School</span>
              for Your Child
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover, compare, and connect with the best schools in Iyunga Ward. 
              Make informed decisions with real-time data and community reviews.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/schools">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg hover:scale-105 transition-all duration-200">
                  <Search className="h-5 w-5 mr-2" />
                  Find Schools Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg hover:scale-105 transition-all duration-200">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-blue-200">
              <div className="flex items-center animate-pulse">
                <Check className="h-4 w-4 mr-2 text-green-400" />
                Free to Use
              </div>
              <div className="flex items-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Clock className="h-4 w-4 mr-2 text-green-400" />
                Real-time Updates
              </div>
              <div className="flex items-center animate-pulse" style={{ animationDelay: '1s' }}>
                <MapPin className="h-4 w-4 mr-2 text-green-400" />
                Local Focus
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-center">Quick School Search</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">School Level</label>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200">
                    <option value="">Select Level</option>
                    <option value="nursery">Nursery</option>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">School Type</label>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200">
                    <option value="">Select Type</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                <Link to="/schools">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium hover:scale-105 transition-all duration-200">
                    Search Schools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
