
import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SearchSection = () => {
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    level: '',
    type: '',
    location: '',
    maxFee: ''
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Advanced School Search
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our powerful filters to find schools that match your exact needs and preferences
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-xl border-0">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Search by Name
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="School name or keyword..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchFilters.keyword}
                    onChange={(e) => setSearchFilters({...searchFilters, keyword: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Education Level
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchFilters.level}
                  onChange={(e) => setSearchFilters({...searchFilters, level: e.target.value})}
                >
                  <option value="">All Levels</option>
                  <option value="nursery">Nursery</option>
                  <option value="primary">Primary School</option>
                  <option value="secondary">Secondary School</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  School Type
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchFilters.type}
                  onChange={(e) => setSearchFilters({...searchFilters, type: e.target.value})}
                >
                  <option value="">All Types</option>
                  <option value="public">Public Schools</option>
                  <option value="private">Private Schools</option>
                  <option value="international">International Schools</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location Area
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                  >
                    <option value="">All Areas</option>
                    <option value="iyunga-central">Iyunga Central</option>
                    <option value="iyunga-east">Iyunga East</option>
                    <option value="iyunga-west">Iyunga West</option>
                    <option value="iyunga-north">Iyunga North</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max Annual Fee (TSH)
                </label>
                <select 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchFilters.maxFee}
                  onChange={(e) => setSearchFilters({...searchFilters, maxFee: e.target.value})}
                >
                  <option value="">Any Budget</option>
                  <option value="500000">Under 500,000 TSH</option>
                  <option value="1000000">Under 1,000,000 TSH</option>
                  <option value="2000000">Under 2,000,000 TSH</option>
                  <option value="5000000">Under 5,000,000 TSH</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium">
                  <Search className="h-5 w-5 mr-2" />
                  Search Schools
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-600">Popular searches:</span>
              <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors">
                English Medium
              </button>
              <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors">
                Science Focus
              </button>
              <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors">
                Sports Programs
              </button>
              <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-colors">
                Affordable Fees
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchSection;
