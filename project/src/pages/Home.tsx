import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import CollegeCard from '../components/CollegeCard';
import CollegeModal from '../components/CollegeModal';
import { colleges } from '../data/colleges';
import { College, FilterOptions } from '../types/college';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'All',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters(prev => ({ ...prev, searchQuery: query }));
  };

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = 
        college.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(filters.searchQuery.toLowerCase()));
      
      const matchesCity = filters.city === 'All' || college.city === filters.city;
      const matchesType = filters.type === 'All' || college.type === filters.type;
      const matchesFees = college.fees.min >= filters.feesRange[0] && college.fees.max <= filters.feesRange[1];
      const matchesRating = filters.rating === 0 || college.rating >= filters.rating;

      return matchesSearch && matchesCity && matchesType && matchesFees && matchesRating;
    });
  }, [filters]);

  const handleViewDetails = (college: College) => {
    setSelectedCollege(college);
  };

  const handleCloseModal = () => {
    setSelectedCollege(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IndeduHub",
    "description": "Find best colleges in Bangalore and Delhi. Compare courses, fees, placements, and get expert guidance for your career.",
    "url": "https://indeduhub.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://indeduhub.com/colleges?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO
        title="Find Best Colleges in Bangalore & Delhi"
        description="Discover top colleges in Bangalore and Delhi. Compare courses, fees, placements, and admission details. Get expert guidance for engineering, medical, MBA, and more."
        keywords="colleges in bangalore, colleges in delhi, engineering colleges, medical colleges, MBA colleges, college admission, course fees, placement records"
        structuredData={structuredData}
      />
      
      <Hero 
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      
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
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredColleges.length} Colleges Found
                </h2>
                <p className="text-gray-600">
                  {filters.city !== 'All' && `in ${filters.city}`}
                  {filters.type !== 'All' && ` for ${filters.type}`}
                </p>
              </div>
              <div className="flex space-x-2">
                <Link
                  to="/bangalore-colleges"
                  className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium"
                >
                  Bangalore Colleges
                </Link>
                <Link
                  to="/delhi-colleges"
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
                >
                  Delhi Colleges
                </Link>
              </div>
            </div>
            
            {filteredColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search query.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredColleges.map((college) => (
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

export default Home;