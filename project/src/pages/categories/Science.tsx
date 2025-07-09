import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Atom, Microscope, Calculator, Beaker } from 'lucide-react';

const Science: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Science',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const scienceColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesType = college.type === 'Science';
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

  const scienceStats = [
    { icon: Atom, label: 'Science Colleges', count: colleges.filter(c => c.type === 'Science').length.toString() },
    { icon: Microscope, label: 'Research Labs', count: '200+' },
    { icon: Calculator, label: 'Programs', count: '50+' },
    { icon: Beaker, label: 'Faculty', count: '1000+' }
  ];

  const scienceSubjects = [
    'Physics',
    'Chemistry',
    'Mathematics',
    'Biology',
    'Computer Science',
    'Statistics',
    'Environmental Science',
    'Biotechnology'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Science Colleges in Bangalore & Delhi",
    "description": "Find the best science colleges in Bangalore and Delhi. Compare B.Sc programs, fees, research opportunities, and admission details.",
    "url": "https://indeduhub.com/science"
  };

  return (
    <>
      <SEO
        title="Best Science Colleges in Bangalore & Delhi - B.Sc Programs"
        description="Discover top science colleges in Bangalore and Delhi. Compare B.Sc programs in physics, chemistry, mathematics, biology, and other science subjects."
        keywords="science colleges, B.Sc colleges, physics colleges, chemistry colleges, mathematics colleges, biology colleges, science colleges bangalore, science colleges delhi"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Science Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover top science colleges offering B.Sc programs with excellent research facilities and career opportunities.
            </p>
          </div>
          
          {/* Science Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {scienceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Science Subjects */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Science Subjects</h2>
            <p className="text-lg text-gray-600">Explore various science disciplines and specializations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {scienceSubjects.map((subject, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-purple-50 hover:border-purple-200 border border-transparent transition-all cursor-pointer">
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
                {scienceColleges.length} Science Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {scienceColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No science colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {scienceColleges.map((college) => (
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

export default Science;