
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+255 123 456 789', '+255 987 654 321'],
      description: 'Call us during business hours'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@schoolcompass.co.tz', 'support@schoolcompass.co.tz'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Iyunga Ward', 'Mbeya City, Tanzania'],
      description: 'Visit our community office'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      description: 'Our availability schedule'
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
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Have questions about schools in Iyunga Ward? Need help finding the right school? 
              We're here to help and would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <info.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-gray-500 text-sm mt-2">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0 animate-slide-in-right">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="school-inquiry">School Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">School Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="mt-8 lg:mt-0 animate-scale-in">
              <Card className="h-full shadow-xl border-0">
                <CardContent className="p-0 h-full">
                  <div className="h-full min-h-[500px] bg-gradient-to-br from-blue-400 to-green-500 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Iyunga Ward</h3>
                      <p className="text-lg">Mbeya City, Tanzania</p>
                      <p className="text-blue-100 mt-4">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about SchoolCompass
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I find schools near me?",
                answer: "Use our search feature on the Schools page to filter by location, level, and type of school."
              },
              {
                question: "Is SchoolCompass free to use?",
                answer: "Yes! SchoolCompass is completely free for parents and students looking for school information."
              },
              {
                question: "How can schools join the platform?",
                answer: "Schools can contact us through this form or call us directly to discuss partnership opportunities."
              },
              {
                question: "How accurate is the school information?",
                answer: "We work directly with schools to ensure all information is current and accurate, with regular updates."
              }
            ].map((faq, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">
                    {faq.answer}
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

export default Contact;
