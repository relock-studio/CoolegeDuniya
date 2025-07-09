import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Education',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  // Mock education colleges data
  const educationColleges = useMemo(() => {
    const mockEducationColleges: College[] = [
      {
        id: 'edu1',
        name: 'Regional Institute of Education Bangalore',
        location: 'Manasagangotri, Bangalore',
        city: 'Bangalore',
        image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.1,
        reviews: 654,
        fees: { min: 50000, max: 100000 },
        courses: ['B.Ed', 'M.Ed', 'PhD', 'Diploma in Education'],
        established: 1963,
        type: 'Education' as const,
        mode: 'Full-time' as const,
        accreditation: ['NCTE', 'UGC', 'NAAC A'],
        highlights: ['Teacher Training', 'Research Focus', 'Government Institute', 'Quality Education'],
        description: 'Premier teacher education institute focusing on quality teacher preparation and educational research.'
      },
      {
        id: 'edu2',
        name: 'Jamia Millia Islamia Faculty of Education',
        location: 'Jamia Nagar, New Delhi',
        city: 'Delhi',
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.0,
        reviews: 789,
        fees: { min: 40000, max: 80000 },
        courses: ['B.Ed', 'M.Ed', 'PhD', 'Diploma in Elementary Education'],
        established: 1920,
        type: 'Education' as const,
        mode: 'Full-time' as const,
        accreditation: ['NCTE', 'UGC', 'NAAC A+'],
        highlights: ['Central University', 'Diverse Programs', 'Research Excellence', 'Inclusive Education'],
        description: 'Central university faculty known for comprehensive teacher education programs and research.'
      }
    ];

    return mockEducationColleges.filter(college => {
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

  const educationStats = [
    { icon: GraduationCap, label: 'Education Colleges', count: '2' },
    { icon: BookOpen, label: 'Programs', count: '15+' },
    { icon: Users, label: 'Trained Teachers', count: '50,000+' },
    { icon: Award, label: 'Research Projects', count: '100+' }
  ];

  const educationPrograms = [
    'Bachelor of Education (B.Ed)',
    'Master of Education (M.Ed)',
    'Diploma in Elementary Education',
    'Educational Psychology',
    'Curriculum Development',
    'Special Education',
    'Educational Technology',
    'Educational Administration'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Education Colleges in Bangalore & Delhi",
    "description": "Find the best education colleges in Bangalore and Delhi. Compare B.Ed programs, fees, teacher training opportunities, and admission details.",
    "url": "https://indeduhub.com/education"
  };

  return (
    <>
      <SEO
        title="Best Education Colleges in Bangalore & Delhi - B.Ed Programs"
        description="Discover top education colleges in Bangalore and Delhi. Compare B.Ed programs, fees, teacher training opportunities, and admission process for education careers."
        keywords="education colleges, B.Ed colleges, teacher training, education programs, NCTE, education colleges bangalore, education colleges delhi, teacher education"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover top education colleges offering B.Ed programs with quality teacher training and educational research opportunities.
            </p>
          </div>
          
          {/* Education Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {educationStats.map((stat, index) => (
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
      
      {/* Education Programs */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education Programs</h2>
            <p className="text-lg text-gray-600">Explore various teacher education programs and specializations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {educationPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all cursor-pointer">
                <h3 className="font-medium text-gray-900">{program}</h3>
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
                {educationColleges.length} Education Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {educationColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No education colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {educationColleges.map((college) => (
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

export default Education;