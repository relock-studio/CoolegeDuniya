import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Wheat, Leaf, Tractor, Sprout } from 'lucide-react';

const Agriculture: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Agriculture',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  // Mock agriculture colleges data
  const agricultureColleges = useMemo(() => {
    const mockAgricultureColleges: College[] = [
      {
        id: 'agri1',
        name: 'University of Agricultural Sciences Bangalore',
        location: 'GKVK Campus, Bangalore',
        city: 'Bangalore',
        image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.2,
        reviews: 876,
        fees: { min: 80000, max: 150000 },
        courses: ['B.Sc Agriculture', 'M.Sc Agriculture', 'PhD', 'B.Tech Food Technology'],
        established: 1964,
        type: 'Agriculture' as const,
        mode: 'Full-time' as const,
        accreditation: ['ICAR', 'UGC', 'NAAC A'],
        highlights: ['Research Focus', 'Modern Labs', 'Field Training', 'Industry Connect'],
        description: 'Premier agricultural university with focus on sustainable farming and agricultural research.'
      },
      {
        id: 'agri2',
        name: 'Indian Agricultural Research Institute Delhi',
        location: 'Pusa, New Delhi',
        city: 'Delhi',
        image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.5,
        reviews: 1234,
        fees: { min: 60000, max: 120000 },
        courses: ['M.Sc Agriculture', 'PhD', 'Post Graduate Diploma'],
        established: 1905,
        type: 'Agriculture' as const,
        mode: 'Full-time' as const,
        accreditation: ['ICAR', 'UGC', 'NAAC A++'],
        highlights: ['Research Excellence', 'Government Institute', 'International Recognition', 'Innovation Hub'],
        description: 'Leading agricultural research institute known for innovations in crop science and technology.'
      }
    ];

    return mockAgricultureColleges.filter(college => {
      const matchesCity = filters.city === 'All' || college.city === filters.city;
      const matchesSearch = 
        college.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(filters.searchQuery.toLowerCase()));
      
      const matchesFees = college.fees.min >= filters.feesRange[0] && college.fees.max <= filters.feesRange[1];
      const matchesRating = filters.rating === 0 || college.rating >= filters.rating;

      return matchesCity && matchesSearch && matchesFees && matchesRating;
    });
  }, [filters]);

  const handleViewDetails = (college: College) => {
    setSelectedCollege(college);
  };

  const handleCloseModal = () => {
    setSelectedCollege(null);
  };

  const agricultureStats = [
    { icon: Wheat, label: 'Agriculture Colleges', count: '2' },
    { icon: Leaf, label: 'Research Areas', count: '20+' },
    { icon: Tractor, label: 'Modern Equipment', count: '100+' },
    { icon: Sprout, label: 'Crop Varieties', count: '500+' }
  ];

  const agricultureFields = [
    'Crop Science',
    'Soil Science',
    'Plant Breeding',
    'Agricultural Engineering',
    'Horticulture',
    'Animal Husbandry',
    'Food Technology',
    'Agricultural Economics'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Agriculture Colleges in Bangalore & Delhi",
    "description": "Find the best agriculture colleges in Bangalore and Delhi. Compare B.Sc Agriculture programs, fees, research opportunities, and admission details.",
    "url": "https://indeduhub.com/agriculture"
  };

  return (
    <>
      <SEO
        title="Best Agriculture Colleges in Bangalore & Delhi - B.Sc Agriculture"
        description="Discover top agriculture colleges in Bangalore and Delhi. Compare B.Sc Agriculture programs, fees, research opportunities, and admission process for agricultural education."
        keywords="agriculture colleges, B.Sc agriculture, agricultural engineering, crop science, agriculture colleges bangalore, agriculture colleges delhi, ICAR"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Agriculture Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover top agriculture colleges offering B.Sc Agriculture programs with modern research facilities and sustainable farming focus.
            </p>
          </div>
          
          {/* Agriculture Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {agricultureStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Agriculture Fields */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agriculture Fields</h2>
            <p className="text-lg text-gray-600">Explore various agricultural disciplines and specializations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {agricultureFields.map((field, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 hover:border-green-200 border border-transparent transition-all cursor-pointer">
                <h3 className="font-medium text-gray-900">{field}</h3>
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
                {agricultureColleges.length} Agriculture Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {agricultureColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No agriculture colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {agricultureColleges.map((college) => (
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

export default Agriculture;