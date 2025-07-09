import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import Filters from '../components/Filters';
import CollegeCard from '../components/CollegeCard';
import CollegeModal from '../components/CollegeModal';
import { colleges } from '../data/colleges';
import { College, FilterOptions } from '../types/college';
import { Search, Filter as FilterIcon } from 'lucide-react';

const Colleges: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'All',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: initialSearch
  });

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
    "@type": "CollectionPage",
    "name": "Colleges in Bangalore and Delhi",
    "description": "Complete list of colleges in Bangalore and Delhi with detailed information about courses, fees, placements, and admission process.",
    "url": "https://indeduhub.com/colleges",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": colleges.length,
      "itemListElement": colleges.map((college, index) => ({
        "@type": "EducationalOrganization",
        "position": index + 1,
        "name": college.name,
        "address": college.location,
        "description": college.description
      }))
    }
  };

  return (
    <>
      <SEO
        title="All Colleges in Bangalore & Delhi"
        description="Complete list of colleges in Bangalore and Delhi. Find engineering, medical, MBA, arts, and science colleges with detailed information about courses, fees, and placements."
        keywords="colleges list, bangalore colleges, delhi colleges, engineering colleges, medical colleges, MBA colleges, college search"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            All Colleges in Bangalore & Delhi
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Discover and compare top colleges with detailed information about courses, fees, placements, and admission process.
          </p>
        </div>
      </div>
      
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
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredColleges.length} Colleges Found
                </h2>
                <p className="text-gray-600">
                  {filters.city !== 'All' && `in ${filters.city}`}
                  {filters.type !== 'All' && ` for ${filters.type}`}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search colleges..."
                    value={filters.searchQuery}
                    onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none w-64"
                  />
                </div>
                
                <button
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                  className="lg:hidden flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <FilterIcon className="h-4 w-4" />
                  <span>Filters</span>
                </button>
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

export default Colleges;