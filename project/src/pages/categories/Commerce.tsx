import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Calculator, TrendingUp, DollarSign, BarChart } from 'lucide-react';

const Commerce: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Commerce',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const commerceColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesType = college.type === 'Commerce';
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

  const commerceStats = [
    { icon: Calculator, label: 'Commerce Colleges', count: colleges.filter(c => c.type === 'Commerce').length.toString() },
    { icon: TrendingUp, label: 'Career Options', count: '100+' },
    { icon: DollarSign, label: 'Avg. Package', count: '₹4L' },
    { icon: BarChart, label: 'Placement Rate', count: '85%' }
  ];

  const commerceSubjects = [
    'Accounting',
    'Business Studies',
    'Economics',
    'Finance',
    'Taxation',
    'Banking',
    'Insurance',
    'Marketing'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Commerce Colleges in Bangalore & Delhi",
    "description": "Find the best commerce colleges in Bangalore and Delhi. Compare B.Com programs, fees, career opportunities, and admission details.",
    "url": "https://indeduhub.com/commerce"
  };

  return (
    <>
      <SEO
        title="Best Commerce Colleges in Bangalore & Delhi - B.Com Programs"
        description="Discover top commerce colleges in Bangalore and Delhi. Compare B.Com programs in accounting, finance, business studies, and other commerce subjects."
        keywords="commerce colleges, B.Com colleges, accounting colleges, finance colleges, business colleges, commerce colleges bangalore, commerce colleges delhi"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Commerce Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Discover top commerce colleges offering B.Com programs with excellent career opportunities in business and finance.
            </p>
          </div>
          
          {/* Commerce Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {commerceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Commerce Subjects */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commerce Subjects</h2>
            <p className="text-lg text-gray-600">Explore various commerce disciplines and specializations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {commerceSubjects.map((subject, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all cursor-pointer">
                <h3 className="font-medium text-gray-900">{subject}</h3>
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
                {commerceColleges.length} Commerce Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {commerceColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No commerce colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {commerceColleges.map((college) => (
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

export default Commerce;