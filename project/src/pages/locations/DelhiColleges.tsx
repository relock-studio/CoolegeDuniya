import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { MapPin, TrendingUp, Users, Award, BookOpen } from 'lucide-react';

const DelhiColleges: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'Delhi',
    type: 'All',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const delhiColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesCity = college.city === 'Delhi';
      const matchesSearch = 
        college.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(filters.searchQuery.toLowerCase()));
      
      const matchesType = filters.type === 'All' || college.type === filters.type;
      const matchesFees = college.fees.min >= filters.feesRange[0] && college.fees.max <= filters.feesRange[1];
      const matchesRating = filters.rating === 0 || college.rating >= filters.rating;

      return matchesCity && matchesSearch && matchesType && matchesFees && matchesRating;
    });
  }, [filters]);

  const handleViewDetails = (college: College) => {
    setSelectedCollege(college);
  };

  const handleCloseModal = () => {
    setSelectedCollege(null);
  };

  const cityStats = [
    { icon: Users, label: 'Total Colleges', count: colleges.filter(c => c.city === 'Delhi').length.toString() },
    { icon: Award, label: 'Top Rated', count: colleges.filter(c => c.city === 'Delhi' && c.rating >= 4.5).length.toString() },
    { icon: BookOpen, label: 'DU Colleges', count: '2+' },
    { icon: MapPin, label: 'Areas Covered', count: '20+' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Top Colleges in Delhi",
    "description": "Complete list of best colleges in Delhi including DU colleges, engineering, medical, MBA, arts, and science colleges with detailed information.",
    "url": "https://indeduhub.com/delhi-colleges",
    "about": {
      "@type": "Place",
      "name": "Delhi",
      "alternateName": "New Delhi"
    }
  };

  return (
    <>
      <SEO
        title="Top Colleges in Delhi - DU, Engineering, Medical, MBA"
        description="Find the best colleges in Delhi. Complete list of Delhi University colleges, engineering, medical, MBA, arts, and science colleges with admission details, fees, and reviews."
        keywords="delhi colleges, delhi university colleges, engineering colleges delhi, medical colleges delhi, MBA colleges delhi, best colleges delhi, DU colleges"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top Colleges in Delhi
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Explore the best educational institutions in India's capital. From prestigious Delhi University colleges to premier professional institutions.
            </p>
          </div>
          
          {/* City Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* About Delhi Education */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Study in Delhi?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delhi, India's capital, offers rich educational heritage with prestigious institutions, cultural diversity, and excellent career opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Heritage</h3>
              <p className="text-gray-600">Home to prestigious institutions like Delhi University, JNU, IIT Delhi, and AIIMS.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Government Hub</h3>
              <p className="text-gray-600">Capital city advantages with government opportunities and policy-making exposure.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Capital</h3>
              <p className="text-gray-600">Rich cultural heritage, museums, libraries, and diverse student community.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Colleges List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <Filters 
              filters={filters}
              onFilterChange={setFilters}
              isOpen={isFiltersOpen}
              setIsOpen={setIsFiltersOpen}
            />
          </div>
          
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {delhiColleges.length} Colleges Found in Delhi
              </h2>
              <p className="text-gray-600">
                {filters.type !== 'All' && `Showing ${filters.type} colleges`}
              </p>
            </div>
            
            {delhiColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {delhiColleges.map((college) => (
                  <CollegeCard
                    key={college.id}
                    college={college}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <CollegeModal 
        college={selectedCollege}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default DelhiColleges;