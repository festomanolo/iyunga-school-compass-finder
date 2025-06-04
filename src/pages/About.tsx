
import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To simplify school selection by providing comprehensive, accurate, and up-to-date information about educational institutions in Iyunga Ward.'
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'A community where every child has access to quality education through informed school choices and transparent information.'
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Transparency, accuracy, community focus, and commitment to educational excellence for all children in Mbeya City.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'Serving parents, students, and schools in Iyunga Ward with a platform that connects and empowers our educational community.'
    }
  ];

  const team = [
    {
      name: 'Sarah Mwanga',
      role: 'Platform Director',
      education: 'M.Ed Educational Administration',
      experience: '15+ years in education sector'
    },
    {
      name: 'James Katembo',
      role: 'Community Liaison',
      education: 'B.A. Community Development',
      experience: '10+ years in Iyunga Ward'
    },
    {
      name: 'Grace Mbeya',
      role: 'School Relations Coordinator',
      education: 'B.Ed Primary Education',
      experience: '12+ years teaching experience'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About SchoolCompass
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering families in Iyunga Ward to make informed educational choices 
              through comprehensive school information and community reviews.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="animate-slide-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  SchoolCompass was born from a simple observation: parents in Iyunga Ward 
                  were struggling to find reliable, comprehensive information about local schools. 
                  Too often, families had to rely on word-of-mouth or outdated information when 
                  making crucial educational decisions for their children.
                </p>
                <p>
                  Founded in 2024, our platform emerged from collaboration between local educators, 
                  parents, and community leaders who recognized the need for a centralized, 
                  transparent resource that would benefit everyone in our educational ecosystem.
                </p>
                <p>
                  Today, we serve as the trusted bridge between families seeking quality education 
                  and schools committed to excellence, creating a more informed and connected 
                  community in Iyunga Ward.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 animate-scale-in">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Impact So Far</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">2,500+</div>
                    <div className="text-blue-200">Families Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">45+</div>
                    <div className="text-blue-200">Schools Listed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-blue-200">Reviews Posted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-blue-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do in service of the Iyunga Ward community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Local educators and community leaders dedicated to improving education access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-in-right"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {member.education}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {member.experience}
                  </p>
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

export default About;
