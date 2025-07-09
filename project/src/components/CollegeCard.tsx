import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar, Award, ExternalLink, Users, BookOpen, TrendingUp } from 'lucide-react';
import { College } from '../types/college';

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ college, onViewDetails }) => {
  const formatFees = (min: number, max: number) => {
    const formatAmount = (amount: number) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`;
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)}L`;
      return `${(amount / 1000).toFixed(0)}K`;
    };
    
    return min === max ? `₹${formatAmount(min)}` : `₹${formatAmount(min)} - ${formatAmount(max)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-orange-200">
      <div className="relative">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {college.type}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-1 shadow-sm">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold">{college.rating}</span>
            <span className="text-xs text-gray-500">({college.reviews})</span>
          </div>
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
            Est. {college.established}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <Link to={`/college/${college.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 cursor-pointer transition-colors">
            {college.name}
          </h3>
        </Link>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-2 text-orange-500" />
          <span className="text-sm">{college.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <Award className="h-4 w-4 mr-2 text-green-500" />
            <span className="text-sm">{college.accreditation[0]}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-1 text-blue-500" />
            <span className="text-sm">{college.mode}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">Popular Courses</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {college.courses.slice(0, 3).map((course, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
              >
                {course}
              </span>
            ))}
            {college.courses.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{college.courses.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {college.highlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs">
              <TrendingUp className="h-3 w-3 mr-1" />
              {highlight}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Annual Fees</p>
            <p className="text-lg font-bold text-orange-600">
              {formatFees(college.fees.min, college.fees.max)}
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-orange-50 text-orange-600 px-3 py-2 rounded-lg hover:bg-orange-100 transition-colors text-sm font-medium">
              Compare
            </button>
            <button
              onClick={() => onViewDetails(college)}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-1 text-sm font-medium"
            >
              <span>View Details</span>
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;