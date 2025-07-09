import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Heart, Stethoscope, Users, Award } from 'lucide-react';

const Medical: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Medical',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  const medicalColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesType = college.type === 'Medical';
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

  const medicalStats = [
    { icon: Heart, label: 'Medical Colleges', count: colleges.filter(c => c.type === 'Medical').length.toString() },
    { icon: Stethoscope, label: 'MBBS Seats', count: '1000+' },
    { icon: Users, label: 'Qualified Faculty', count: '500+' },
    { icon: Award, label: 'NEET Qualified', count: '100%' }
  ];

  const medicalCourses = [
    'MBBS',
    'BDS',
    'BAMS',
    'BHMS',
    'B.Sc Nursing',
    'B.Pharma',
    'Physiotherapy',
    'Medical Lab Technology'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Medical Colleges in Bangalore & Delhi",
    "description": "Find the best medical colleges in Bangalore and Delhi. Compare MBBS programs, fees, NEET cutoffs, and admission details.",
    "url": "https://indeduhub.com/medical"
  };

  return (
    <>
      <SEO
        title="Best Medical Colleges in Bangalore & Delhi - MBBS Admission"
        description="Discover top medical colleges in Bangalore and Delhi. Compare MBBS programs, fees, NEET cutoffs, clinical training, and admission process for medical education."
        keywords="medical colleges, MBBS colleges, medical admission, NEET cutoff, medical colleges bangalore, medical colleges delhi, AIIMS, government medical colleges"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Medical Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover top medical colleges offering MBBS and other healthcare programs with excellent clinical training.
            </p>
          </div>
          
          {/* Medical Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {medicalStats.map((stat, index) => (
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
      
      {/* Medical Courses */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Courses</h2>
            <p className="text-lg text-gray-600">Explore various medical and healthcare programs</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {medicalCourses.map((course, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-green-50 hover:border-green-200 border border-transparent transition-all cursor-pointer">
                <h3 className="font-medium text-gray-900">{course}</h3>
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
                {medicalColleges.length} Medical Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {medicalColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No medical colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {medicalColleges.map((college) => (
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

export default Medical;