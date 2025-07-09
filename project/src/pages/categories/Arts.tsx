import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Palette, BookOpen, Music, Theater } from 'lucide-react';

const Arts: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Arts',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const artsColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesType = college.type === 'Arts';
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

  const artsStats = [
    { icon: Palette, label: 'Arts Colleges', count: colleges.filter(c => c.type === 'Arts').length.toString() },
    { icon: BookOpen, label: 'Programs', count: '80+' },
    { icon: Music, label: 'Creative Fields', count: '25+' },
    { icon: Theater, label: 'Cultural Events', count: '500+' }
  ];

  const artsSubjects = [
    'English Literature',
    'History',
    'Political Science',
    'Psychology',
    'Sociology',
    'Philosophy',
    'Fine Arts',
    'Journalism'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Arts Colleges in Bangalore & Delhi",
    "description": "Find the best arts colleges in Bangalore and Delhi. Compare B.A. programs, fees, cultural activities, and admission details.",
    "url": "https://indeduhub.com/arts"
  };

  return (
    <>
      <SEO
        title="Best Arts Colleges in Bangalore & Delhi - B.A. Programs"
        description="Discover top arts colleges in Bangalore and Delhi. Compare B.A. programs in literature, history, psychology, and other liberal arts subjects."
        keywords="arts colleges, B.A. colleges, liberal arts colleges, literature colleges, history colleges, arts colleges bangalore, arts colleges delhi"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Arts Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Discover top arts colleges offering B.A. programs with rich cultural heritage and diverse academic opportunities.
            </p>
          </div>
          
          {/* Arts Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {artsStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-pink-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Arts Subjects */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Arts Subjects</h2>
            <p className="text-lg text-gray-600">Explore various liberal arts disciplines and humanities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {artsSubjects.map((subject, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-pink-50 hover:border-pink-200 border border-transparent transition-all cursor-pointer">
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
                {artsColleges.length} Arts Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {artsColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No arts colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {artsColleges.map((college) => (
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

export default Arts;