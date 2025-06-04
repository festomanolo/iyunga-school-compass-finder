
import React from 'react';
import { MapPin, User, Calendar, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedSchools = () => {
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
      image: '/api/placeholder/400/250',
      features: ['English Medium', 'Computer Lab', 'Library'],
      description: 'Well-established public primary school with modern facilities and experienced teachers.'
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
      image: '/api/placeholder/400/250',
      features: ['Science Lab', 'Sports Complex', 'Boarding'],
      description: 'Premier private secondary school known for excellent academic performance and modern facilities.'
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
      image: '/api/placeholder/400/250',
      features: ['Play Area', 'Meals Included', 'Transport'],
      description: 'Nurturing environment for early childhood development with qualified care providers.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Schools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover top-rated schools in Iyunga Ward with excellent facilities and proven track records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {schools.map((school) => (
            <Card key={school.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{school.name.split(' ')[0]}</div>
                    <div className="text-lg opacity-90">{school.name.split(' ').slice(1).join(' ')}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
                  {school.type}
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{school.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">{school.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({school.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {school.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    {school.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2 text-gray-400" />
                    {school.students} students
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    {school.level} Level
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {school.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Annual Fees</span>
                    <div className="font-bold text-blue-600">{school.fees}</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
            View All Schools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSchools;
