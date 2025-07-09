import React from 'react';
import SEO from '../components/SEO';
import { GraduationCap, Users, Award, TrendingUp, MapPin, BookOpen } from 'lucide-react';

const Universities: React.FC = () => {
  const universities = [
    {
      name: 'Bangalore University',
      location: 'Bangalore',
      established: 1964,
      type: 'State University',
      affiliatedColleges: 500,
      students: 300000,
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Delhi University',
      location: 'Delhi',
      established: 1922,
      type: 'Central University',
      affiliatedColleges: 90,
      students: 132435,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Visvesvaraya Technological University',
      location: 'Bangalore',
      established: 1998,
      type: 'State University',
      affiliatedColleges: 200,
      students: 400000,
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Jawaharlal Nehru University',
      location: 'Delhi',
      established: 1969,
      type: 'Central University',
      affiliatedColleges: 15,
      students: 8500,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Universities in Bangalore & Delhi",
    "description": "Complete list of universities in Bangalore and Delhi with detailed information about courses, affiliated colleges, and admission process.",
    "url": "https://indeduhub.com/universities"
  };

  return (
    <>
      <SEO
        title="Top Universities in Bangalore & Delhi - Complete List"
        description="Explore top universities in Bangalore and Delhi. Find detailed information about courses, affiliated colleges, admission process, and university rankings."
        keywords="universities bangalore, universities delhi, central universities, state universities, university admission, affiliated colleges"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Universities in Bangalore & Delhi
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover top universities offering diverse academic programs and research opportunities.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {universities.map((university, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{university.location}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Established</p>
                    <p className="font-semibold">{university.established}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-semibold">{university.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Affiliated Colleges</p>
                    <p className="font-semibold">{university.affiliatedColleges}+</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Students</p>
                    <p className="font-semibold">{university.students.toLocaleString()}+</p>
                  </div>
                </div>
                
                <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Universities;