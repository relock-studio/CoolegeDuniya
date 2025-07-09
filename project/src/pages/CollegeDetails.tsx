import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Calendar, Award, Users, BookOpen, DollarSign, Phone, Mail, Globe, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { colleges } from '../data/colleges';

const CollegeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const college = colleges.find(c => c.id === id);

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">College Not Found</h1>
          <Link to="/colleges" className="text-orange-600 hover:text-orange-700">
            Back to Colleges
          </Link>
        </div>
      </div>
    );
  }

  const formatFees = (min: number, max: number) => {
    const formatAmount = (amount: number) => {
      if (amount >= 10000000) return `${(amount / 10000000).toFixed(1)}Cr`;
      if (amount >= 100000) return `${(amount / 100000).toFixed(1)}L`;
      return `${(amount / 1000).toFixed(0)}K`;
    };
    
    return min === max ? `₹${formatAmount(min)}` : `₹${formatAmount(min)} - ${formatAmount(max)}`;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": college.name,
    "description": college.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": college.location,
      "addressLocality": college.city,
      "addressCountry": "IN"
    },
    "foundingDate": college.established.toString(),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": college.rating,
      "reviewCount": college.reviews
    },
    "offers": {
      "@type": "Offer",
      "category": "Education",
      "priceRange": formatFees(college.fees.min, college.fees.max)
    }
  };

  return (
    <>
      <SEO
        title={`${college.name} - Admission, Courses, Fees, Placement`}
        description={`${college.name} in ${college.location}. Get complete details about admission process, courses offered, fees structure, placement records, and reviews.`}
        keywords={`${college.name}, ${college.city} colleges, ${college.type} colleges, admission, courses, fees, placement`}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/colleges"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Colleges
            </Link>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <img
                src={college.image}
                alt={college.name}
                className="w-full lg:w-80 h-64 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{college.name}</h1>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{college.location}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-lg font-semibold">{college.rating}</span>
                      <span className="text-gray-500">({college.reviews} reviews)</span>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {college.type}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Established</p>
                      <p className="font-medium">{college.established}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Accreditation</p>
                      <p className="font-medium">{college.accreditation[0]}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Mode</p>
                      <p className="font-medium">{college.mode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-blue-600">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Annual Fees</p>
                      <p className="font-medium">{formatFees(college.fees.min, college.fees.max)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {college.highlights.slice(0, 4).map((highlight, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {college.name}</h2>
                <p className="text-gray-600 leading-relaxed">{college.description}</p>
              </div>
              
              {/* Courses */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  Courses Offered
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {college.courses.map((course, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <h3 className="font-medium text-gray-900">{course}</h3>
                      <p className="text-sm text-gray-600 mt-1">Duration: 3-4 years</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Highlights */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {college.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Accreditation */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Accreditation & Recognition</h2>
                <div className="flex flex-wrap gap-3">
                  {college.accreditation.map((acc, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium"
                    >
                      {acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                    Apply Now
                  </button>
                  <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    Download Brochure
                  </button>
                  <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors font-medium">
                    Contact College
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                    Save College
                  </button>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">+91-80-2345-6789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">info@{college.name.toLowerCase().replace(/\s+/g, '')}.edu</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">www.{college.name.toLowerCase().replace(/\s+/g, '')}.edu</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Student Rating</span>
                    <span className="font-medium">{college.rating}/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Reviews</span>
                    <span className="font-medium">{college.reviews}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Established</span>
                    <span className="font-medium">{college.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium">{college.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeDetails;