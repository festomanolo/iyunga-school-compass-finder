
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 hover:scale-105 transition-transform duration-200">
              <h1 className="text-2xl font-bold text-blue-600">
                School<span className="text-green-600">Compass</span>
              </h1>
              <p className="text-xs text-gray-500">Iyunga Ward, Mbeya</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/schools" 
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/schools') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Find Schools
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600 hover:scale-105 transition-all duration-200">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 transition-all duration-200">
              For Schools
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link 
                to="/" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/schools" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/schools') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Find Schools
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-blue-600 mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  For Schools
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
