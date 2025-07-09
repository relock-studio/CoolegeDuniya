import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Cpu, Zap, Cog, TrendingUp } from 'lucide-react';

const Engineering: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Engineering',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const engineeringColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesType = college.type === 'Engineering';
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

  const engineeringStats = [
    { icon: Cpu, label: 'Engineering Colleges', count: colleges.filter(c => c.type === 'Engineering').length.toString() },
    { icon: Zap, label: 'Top Rated (4.5+)', count: colleges.filter(c => c.type === 'Engineering' && c.rating >= 4.5).length.toString() },
    { icon: Cog, label: 'Specializations', count: '15+' },
    { icon: TrendingUp, label: 'Avg. Placement', count: '85%' }
  ];

  const popularBranches = [
    'Computer Science Engineering',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Information Technology',
    'Aerospace Engineering',
    'Chemical Engineering'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Engineering Colleges in Bangalore & Delhi",
    "description": "Find the best engineering colleges in Bangalore and Delhi. Compare B.Tech programs, fees, placements, and admission details.",
    "url": "https://indeduhub.com/engineering"
  };

  return (
    <>
      <SEO
        title="Best Engineering Colleges in Bangalore & Delhi - B.Tech Admission"
        description="Discover top engineering colleges in Bangalore and Delhi. Compare B.Tech programs, fees, placements, and admission process for computer science, mechanical, electrical, and more."
        keywords="engineering colleges, B.Tech admission, computer science engineering, mechanical engineering, electrical engineering, engineering colleges bangalore, engineering colleges delhi"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Engineering Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover top engineering colleges offering B.Tech programs in computer science, mechanical, electrical, and other specializations.
            </p>
          </div>
          
          {/* Engineering Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {engineeringStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Popular Branches */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Engineering Branches</h2>
            <p className="text-lg text-gray-600">Choose from a wide range of engineering specializations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {popularBranches.map((branch, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all cursor-pointer">
                <h3 className="font-medium text-gray-900">{branch}</h3>
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
                {engineeringColleges.length} Engineering Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {engineeringColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No engineering colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {engineeringColleges.map((college) => (
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

export default Engineering;