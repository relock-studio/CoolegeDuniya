import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { MapPin, TrendingUp, Users, Award } from 'lucide-react';

const BangaloreColleges: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'Bangalore',
    type: 'All',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const bangaloreColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesCity = college.city === 'Bangalore';
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
    { icon: Users, label: 'Total Colleges', count: colleges.filter(c => c.city === 'Bangalore').length.toString() },
    { icon: Award, label: 'Top Rated', count: colleges.filter(c => c.city === 'Bangalore' && c.rating >= 4.5).length.toString() },
    { icon: TrendingUp, label: 'Engineering', count: colleges.filter(c => c.city === 'Bangalore' && c.type === 'Engineering').length.toString() },
    { icon: MapPin, label: 'Areas Covered', count: '15+' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Top Colleges in Bangalore",
    "description": "Complete list of best colleges in Bangalore including engineering, medical, MBA, arts, and science colleges with detailed information.",
    "url": "https://indeduhub.com/bangalore-colleges",
    "about": {
      "@type": "Place",
      "name": "Bangalore",
      "alternateName": "Bengaluru"
    }
  };

  return (
    <>
      <SEO
        title="Top Colleges in Bangalore - Engineering, Medical, MBA, Arts"
        description="Find the best colleges in Bangalore. Complete list of engineering, medical, MBA, arts, and science colleges with admission details, fees, placements, and reviews."
        keywords="bangalore colleges, bengaluru colleges, engineering colleges bangalore, medical colleges bangalore, MBA colleges bangalore, best colleges bangalore"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top Colleges in Bangalore
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the best educational institutions in India's Silicon Valley. From premier engineering colleges to top business schools.
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
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* About Bangalore Education */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Study in Bangalore?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bangalore, known as India's Silicon Valley, offers world-class educational opportunities with strong industry connections and excellent career prospects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Hub</h3>
              <p className="text-gray-600">Home to major IT companies and startups, offering excellent internship and job opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-600">Premier institutions like IISc, IIM Bangalore, and top engineering colleges.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diverse Community</h3>
              <p className="text-gray-600">Cosmopolitan city with students from across India and the world.</p>
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
                {bangaloreColleges.length} Colleges Found in Bangalore
              </h2>
              <p className="text-gray-600">
                {filters.type !== 'All' && `Showing ${filters.type} colleges`}
              </p>
            </div>
            
            {bangaloreColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {bangaloreColleges.map((college) => (
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

export default BangaloreColleges;