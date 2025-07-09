import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Palette, Brush, Camera, Layers } from 'lucide-react';

const Design: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Design',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  // Mock design colleges data
  const designColleges = useMemo(() => {
    const mockDesignColleges: College[] = [
      {
        id: 'design1',
        name: 'National Institute of Design Bangalore',
        location: 'R V College Post, Bangalore',
        city: 'Bangalore',
        image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.4,
        reviews: 987,
        fees: { min: 300000, max: 500000 },
        courses: ['B.Des', 'M.Des', 'PhD', 'Certificate Courses'],
        established: 2009,
        type: 'Design' as const,
        mode: 'Full-time' as const,
        accreditation: ['UGC', 'AICTE', 'Ministry of Commerce'],
        highlights: ['Industry Connect', 'Creative Excellence', 'Modern Studios', 'International Exposure'],
        description: 'Premier design institute focusing on innovation and creativity in design education.'
      },
      {
        id: 'design2',
        name: 'National Institute of Fashion Technology Delhi',
        location: 'Hauz Khas, New Delhi',
        city: 'Delhi',
        image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.3,
        reviews: 892,
        fees: { min: 300000, max: 600000 },
        courses: ['B.Des', 'M.Des', 'MBA', 'Certificate Courses', 'Diploma'],
        established: 1986,
        type: 'Design' as const,
        mode: 'Full-time' as const,
        accreditation: ['UGC', 'AICTE', 'Ministry of Textiles'],
        highlights: ['Fashion Industry Leader', 'Creative Excellence', 'Industry Partnerships', 'Design Innovation'],
        description: 'Leading fashion and design institute with strong industry connections and creative programs.'
      }
    ];

    return mockDesignColleges.filter(college => {
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

  const designStats = [
    { icon: Palette, label: 'Design Colleges', count: '2' },
    { icon: Brush, label: 'Design Programs', count: '25+' },
    { icon: Camera, label: 'Creative Studios', count: '50+' },
    { icon: Layers, label: 'Industry Partners', count: '200+' }
  ];

  const designFields = [
    'Fashion Design',
    'Graphic Design',
    'Product Design',
    'Interior Design',
    'Animation',
    'UI/UX Design',
    'Textile Design',
    'Industrial Design'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Design Colleges in Bangalore & Delhi",
    "description": "Find the best design colleges in Bangalore and Delhi. Compare B.Des programs, fees, creative opportunities, and admission details.",
    "url": "https://indeduhub.com/design"
  };

  return (
    <>
      <SEO
        title="Best Design Colleges in Bangalore & Delhi - B.Des Programs"
        description="Discover top design colleges in Bangalore and Delhi. Compare B.Des programs in fashion, graphic, product design, and other creative fields with industry connections."
        keywords="design colleges, B.Des colleges, fashion design, graphic design, NIFT, NID, design colleges bangalore, design colleges delhi, creative education"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Design Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover top design colleges offering B.Des programs with creative excellence and strong industry connections.
            </p>
          </div>
          
          {/* Design Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designStats.map((stat, index) => (
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
      
      {/* Design Fields */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Fields</h2>
            <p className="text-lg text-gray-600">Explore various design disciplines and creative specializations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {designFields.map((field, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-purple-50 hover:border-purple-200 border border-transparent transition-all cursor-pointer">
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
                {designColleges.length} Design Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {designColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No design colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {designColleges.map((college) => (
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

export default Design;