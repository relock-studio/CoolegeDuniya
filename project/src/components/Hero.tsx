import React from 'react';
import { Search, TrendingUp, Award, Users, MapPin, BookOpen } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Hero: React.FC<HeroProps> = ({ onSearch, searchQuery }) => {
  const popularSearches = [
    'Engineering Colleges in Bangalore',
    'Medical Colleges in Delhi',
    'MBA Colleges',
    'IIT Delhi',
    'AIIMS Delhi',
    'Christ University'
  ];

  const quickStats = [
    { icon: BookOpen, label: 'Colleges', count: '45,000+' },
    { icon: Users, label: 'Students Helped', count: '2M+' },
    { icon: MapPin, label: 'Cities Covered', count: '2' },
    { icon: Award, label: 'Expert Reviews', count: '10,000+' }
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect College in
            <span className="text-orange-500"> Bangalore & Delhi</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover top colleges, compare courses, check fees, placements & admission details. 
            Make informed decisions with expert guidance.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for colleges, courses, exams, or locations..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-12 pr-32 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none shadow-sm"
              />
              <button className="absolute right-2 top-2 bg-orange-500 text-white px-8 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Search
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="text-sm text-gray-600 mr-2">Popular:</span>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => onSearch(search)}
                  className="text-sm bg-white border border-gray-200 rounded-full px-3 py-1 hover:border-orange-300 hover:text-orange-600 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border">
                <stat.icon className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Rankings</h3>
            <p className="text-gray-600">Get updated college rankings based on placements, faculty, and infrastructure</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Reviews</h3>
            <p className="text-gray-600">Read authentic reviews from current students and alumni</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Counselling</h3>
            <p className="text-gray-600">Get personalized guidance from education experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;