import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Briefcase, TrendingUp, Users, Award } from 'lucide-react';

const MBA: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Management',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const mbaColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesType = college.type === 'Management';
      const matchesCity = filters.city === 'All' || college.city === filters.city;
      const matchesSearch = 
        college.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(filters.searchQuery.toLowerCase()));
      
      const matchesFees = college.fees.min >= filters.feesRange[0] && college.fees.max <= filters.feesRange[1];
      const matchesRating = filters.rating === 0 || college.rating >= filters.rating;

      return matchesType && matchesCity && matchesSearch && matchesFees && matchesRating;
    });
  }, [filters]);

  const handleViewDetails = (college: College) => {
    setSelectedCollege(college);
  };

  const handleCloseModal = () => {
    setSelectedCollege(null);
  };

  const mbaStats = [
    { icon: Briefcase, label: 'MBA Colleges', count: colleges.filter(c => c.type === 'Management').length.toString() },
    { icon: TrendingUp, label: 'Avg. Package', count: '₹12L' },
    { icon: Users, label: 'Top Recruiters', count: '500+' },
    { icon: Award, label: 'Placement Rate', count: '95%' }
  ];

  const specializations = [
    'Finance',
    'Marketing',
    'Human Resources',
    'Operations',
    'Information Technology',
    'International Business',
    'Entrepreneurship',
    'Healthcare Management'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "MBA Colleges in Bangalore & Delhi",
    "description": "Find the best MBA colleges in Bangalore and Delhi. Compare programs, fees, placements, and admission details for management education.",
    "url": "https://indeduhub.com/mba"
  };

  return (
    <>
      <SEO
        title="Best MBA Colleges in Bangalore & Delhi - Management Programs"
        description="Discover top MBA colleges in Bangalore and Delhi. Compare management programs, fees, placements, specializations, and admission process for business education."
        keywords="MBA colleges, management colleges, business schools, MBA admission, MBA fees, MBA placements, MBA colleges bangalore, MBA colleges delhi"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              MBA Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Discover top business schools offering MBA programs with excellent placements and industry connections.
            </p>
          </div>
          
          {/* MBA Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mbaStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Specializations */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MBA Specializations</h2>
            <p className="text-lg text-gray-600">Choose from diverse specializations to match your career goals</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {specializations.map((specialization, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-all cursor-pointer">
                <h3 className="font-medium text-gray-900">{specialization}</h3>
              </div>
            ))}
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
                {mbaColleges.length} MBA Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {mbaColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No MBA colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mbaColleges.map((college) => (
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

export default MBA;