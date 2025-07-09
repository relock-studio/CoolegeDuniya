import React from 'react';
import { X, Star, MapPin, Calendar, Award, Users, BookOpen, DollarSign } from 'lucide-react';
import { College } from '../types/college';

interface CollegeModalProps {
  college: College | null;
  onClose: () => void;
}

const CollegeModal: React.FC<CollegeModalProps> = ({ college, onClose }) => {
  if (!college) return null;

  const formatFees = (min: number, max: number) => {
    const formatAmount = (amount: number) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`;
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)}L`;
      return `${(amount / 1000).toFixed(0)}K`;
    };
    
    return min === max ? `₹${formatAmount(min)}` : `₹${formatAmount(min)} - ${formatAmount(max)}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{college.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-lg font-semibold">{college.rating}</span>
                  <span className="text-gray-500">({college.reviews} reviews)</span>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {college.type}
                </span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3" />
                <span>{college.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-3" />
                <span>Established {college.established}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Award className="h-5 w-5 mr-3" />
                <span>{college.accreditation.join(', ')}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-3" />
                <span>{college.mode}</span>
              </div>
              
              <div className="flex items-center text-blue-600">
                <DollarSign className="h-5 w-5 mr-3" />
                <span className="text-lg font-semibold">
                  {formatFees(college.fees.min, college.fees.max)} per year
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600 leading-relaxed">{college.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Courses Offered
              </h3>
              <div className="space-y-2">
                {college.courses.map((course, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-700">{course}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Highlights</h3>
              <div className="space-y-2">
                {college.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
              Download Brochure
            </button>
            <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
              Contact College
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeModal;