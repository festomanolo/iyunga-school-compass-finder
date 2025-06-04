
import React from 'react';
import { MapPin, User, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              School<span className="text-green-400">Compass</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Connecting families with the best educational opportunities in Iyunga Ward, Mbeya City. 
              Making school selection simple, transparent, and effective.
            </p>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Iyunga Ward, Mbeya City, Tanzania</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Find Schools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Compare Schools</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">School Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Admission Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">For Schools</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SchoolCompass. All rights reserved. Built for Iyunga Ward community.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                WhatsApp
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
