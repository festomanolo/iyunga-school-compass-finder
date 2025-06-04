
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Schools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const schools = [
    {
      id: 1,
      name: 'Iyunga Primary School',
      type: 'Public',
      level: 'Primary',
      location: 'Iyunga Central',
      students: 450,
      rating: 4.5,
      reviews: 23,
      fees: 'Free',
      image: '/api/placeholder/300/200',
      features: ['English Medium', 'Computer Lab', 'Library', 'Sports Field'],
      description: 'Well-established public primary school with modern facilities and experienced teachers committed to quality education.'
    },
    {
      id: 2,
      name: 'Bright Future Secondary',
      type: 'Private',
      level: 'Secondary',
      location: 'Iyunga East',
      students: 320,
      rating: 4.8,
      reviews: 31,
      fees: '800,000 TSH/year',
      image: '/api/placeholder/300/200',
      features: ['Science Lab', 'Sports Complex', 'Boarding', 'ICT Center'],
      description: 'Premier private secondary school known for excellent academic performance and state-of-the-art facilities.'
    },
    {
      id: 3,
      name: 'Little Stars Nursery',
      type: 'Private',
      level: 'Nursery',
      location: 'Iyunga West',
      students: 85,
      rating: 4.6,
      reviews: 18,
      fees: '300,000 TSH/year',
      image: '/api/placeholder/300/200',
      features: ['Play Area', 'Meals Included', 'Transport', 'Qualified Staff'],
      description: 'Nurturing environment for early childhood development with qualified care providers and modern learning methods.'
    },
    {
      id: 4,
      name: 'Green Valley Academy',
      type: 'Private',
      level: 'Primary',
      location: 'Iyunga North',
      students: 280,
      rating: 4.7,
      reviews: 25,
      fees: '500,000 TSH/year',
      image: '/api/placeholder/300/200',
      features: ['Cambridge Curriculum', 'Swimming Pool', 'Art Studio', 'Music Room'],
      description: 'International standard primary education with focus on holistic child development.'
    },
    {
      id: 5,
      name: 'Mbeya Technical Secondary',
      type: 'Public',
      level: 'Secondary',
      location: 'Iyunga South',
      students: 520,
      rating: 4.3,
      reviews: 42,
      fees: 'Free',
      image: '/api/placeholder/300/200',
      features: ['Technical Workshops', 'Vocational Training', 'Career Guidance', 'Industry Links'],
      description: 'Technical secondary school preparing students for technical careers and higher education.'
    },
    {
      id: 6,
      name: 'Rainbow Kids Nursery',
      type: 'Private',
      level: 'Nursery',
      location: 'Iyunga Central',
      students: 65,
      rating: 4.4,
      reviews: 15,
      fees: '250,000 TSH/year',
      image: '/api/placeholder/300/200',
      features: ['Montessori Method', 'Outdoor Learning', 'Nutritious Meals', 'Parent Workshops'],
      description: 'Child-centered learning approach focusing on natural development and hands-on activities.'
    }
  ];

  const filteredSchools = schools.filter(school => {
    return (
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLevel === '' || school.level === selectedLevel) &&
      (selectedType === '' || school.type === selectedType)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Find Your Perfect School
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore all schools in Iyunga Ward with detailed information and reviews
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-slide-in-right">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search schools by name..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <select
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">All Levels</option>
                <option value="Nursery">Nursery</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>
            <div>
              <select
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredSchools.length} Schools Found
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map((school, index) => (
              <Card 
                key={school.id} 
                className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-green-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-2">{school.name.charAt(0)}</div>
                    <div className="text-sm opacity-90">{school.type} School</div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{school.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{school.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {school.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {school.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {school.students} students
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {school.level} Level
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {school.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500">Annual Fees</span>
                      <div className="font-bold text-blue-600">{school.fees}</div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schools;
