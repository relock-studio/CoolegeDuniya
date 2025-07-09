import React from 'react';
import SEO from '../components/SEO';
import { Globe, Plane, GraduationCap, DollarSign, Clock, Users } from 'lucide-react';

const StudyAbroad: React.FC = () => {
  const countries = [
    {
      name: 'United States',
      flag: '🇺🇸',
      universities: 4000,
      avgCost: '$30,000-60,000',
      duration: '4 years',
      popularCourses: ['Engineering', 'Business', 'Computer Science', 'Medicine'],
      requirements: 'TOEFL/IELTS, SAT/GRE/GMAT',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      universities: 150,
      avgCost: '£15,000-35,000',
      duration: '3 years',
      popularCourses: ['Business', 'Engineering', 'Arts', 'Law'],
      requirements: 'IELTS, A-Levels/IB',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      universities: 100,
      avgCost: 'CAD 20,000-40,000',
      duration: '4 years',
      popularCourses: ['Engineering', 'Business', 'Healthcare', 'IT'],
      requirements: 'IELTS/TOEFL, SAT/ACT',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      universities: 43,
      avgCost: 'AUD 25,000-45,000',
      duration: '3-4 years',
      popularCourses: ['Engineering', 'Business', 'Medicine', 'Arts'],
      requirements: 'IELTS, ATAR/IB',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      universities: 400,
      avgCost: '€500-3,000',
      duration: '3-4 years',
      popularCourses: ['Engineering', 'Business', 'Science', 'Arts'],
      requirements: 'IELTS/TOEFL, Abitur',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      universities: 6,
      avgCost: 'SGD 30,000-50,000',
      duration: '3-4 years',
      popularCourses: ['Business', 'Engineering', 'IT', 'Finance'],
      requirements: 'IELTS/TOEFL, SAT/A-Levels',
      image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Study Abroad - International Education Opportunities",
    "description": "Explore study abroad opportunities for students from Bangalore and Delhi. Get information about universities, courses, costs, and admission requirements.",
    "url": "https://indeduhub.com/study-abroad"
  };

  return (
    <>
      <SEO
        title="Study Abroad - International Education Opportunities"
        description="Explore study abroad opportunities for students from Bangalore and Delhi. Find information about top universities, courses, costs, scholarships, and admission requirements worldwide."
        keywords="study abroad, international education, overseas education, foreign universities, study visa, international students, global education"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Study Abroad Opportunities
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore world-class education opportunities and expand your horizons with international study programs.
          </p>
        </div>
      </div>
      
      {/* Why Study Abroad */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Study Abroad?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Studying abroad offers unique opportunities for personal growth, cultural exposure, and career advancement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Exposure</h3>
              <p className="text-gray-600">Experience diverse cultures, languages, and perspectives that broaden your worldview.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-600">Access world-renowned universities with cutting-edge research and teaching methods.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Opportunities</h3>
              <p className="text-gray-600">Enhance your career prospects with international qualifications and global network.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Countries */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Study Destinations</h2>
            <p className="text-lg text-gray-600">Choose from top destinations offering world-class education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{country.flag}</span>
                    <h3 className="text-xl font-bold text-gray-900">{country.name}</h3>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Universities</p>
                        <p className="text-sm font-medium">{country.universities}+</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Average Cost</p>
                        <p className="text-sm font-medium">{country.avgCost}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-3" />
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-sm font-medium">{country.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Popular Courses:</p>
                    <div className="flex flex-wrap gap-1">
                      {country.popularCourses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-1">Requirements:</p>
                    <p className="text-xs text-gray-600">{country.requirements}</p>
                  </div>
                  
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                    Explore Programs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Application Process */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">Step-by-step guide to studying abroad</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Research & Choose', desc: 'Research universities and programs that match your goals' },
              { step: '2', title: 'Prepare Documents', desc: 'Gather transcripts, test scores, and recommendation letters' },
              { step: '3', title: 'Apply & Interview', desc: 'Submit applications and prepare for interviews' },
              { step: '4', title: 'Visa & Travel', desc: 'Apply for student visa and prepare for departure' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your International Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our study abroad experts and make your dream a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get Free Counseling
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyAbroad;