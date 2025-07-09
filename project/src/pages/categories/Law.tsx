import React, { useState, useMemo } from 'react';
import SEO from '../../components/SEO';
import Filters from '../../components/Filters';
import CollegeCard from '../../components/CollegeCard';
import CollegeModal from '../../components/CollegeModal';
import { colleges } from '../../data/colleges';
import { College, FilterOptions } from '../../types/college';
import { Scale, Gavel, BookOpen, Users } from 'lucide-react';

const Law: React.FC = () => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: 'All',
    type: 'Law',
    feesRange: [0, 10000000],
    rating: 0,
    searchQuery: ''
  });

  // Since we don't have law colleges in our data, we'll create mock data
  const lawColleges = useMemo(() => {
    const mockLawColleges: College[] = [
      {
        id: 'law1',
        name: 'National Law School of India University',
        location: 'Nagarbhavi, Bangalore',
        city: 'Bangalore',
        image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.7,
        reviews: 1234,
        fees: { min: 200000, max: 300000 },
        courses: ['B.A. LL.B', 'LL.M', 'PhD'],
        established: 1987,
        type: 'Law' as const,
        mode: 'Full-time' as const,
        accreditation: ['BCI', 'UGC', 'NAAC A++'],
        highlights: ['Top Law School', 'Excellent Faculty', 'Moot Court', 'Legal Aid'],
        description: 'Premier law school in India known for excellence in legal education and research.'
      },
      {
        id: 'law2',
        name: 'Faculty of Law, Delhi University',
        location: 'North Campus, Delhi',
        city: 'Delhi',
        image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        rating: 4.3,
        reviews: 2156,
        fees: { min: 50000, max: 100000 },
        courses: ['LL.B', 'LL.M', 'PhD'],
        established: 1924,
        type: 'Law' as const,
        mode: 'Full-time' as const,
        accreditation: ['BCI', 'UGC', 'NAAC A+'],
        highlights: ['Historic Legacy', 'Affordable Fees', 'Alumni Network', 'Research Focus'],
        description: 'One of the oldest law faculties in India with rich academic heritage.'
      }
    ];

    return mockLawColleges.filter(college => {
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

  const lawStats = [
    { icon: Scale, label: 'Law Colleges', count: '2' },
    { icon: Gavel, label: 'Specializations', count: '15+' },
    { icon: BookOpen, label: 'Legal Journals', count: '50+' },
    { icon: Users, label: 'Practicing Alumni', count: '10,000+' }
  ];

  const lawSpecializations = [
    'Constitutional Law',
    'Criminal Law',
    'Corporate Law',
    'International Law',
    'Human Rights Law',
    'Environmental Law',
    'Intellectual Property',
    'Tax Law'
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Law Colleges in Bangalore & Delhi",
    "description": "Find the best law colleges in Bangalore and Delhi. Compare LL.B programs, fees, specializations, and admission details.",
    "url": "https://indeduhub.com/law"
  };

  return (
    <>
      <SEO
        title="Best Law Colleges in Bangalore & Delhi - LL.B Programs"
        description="Discover top law colleges in Bangalore and Delhi. Compare LL.B programs, fees, CLAT requirements, specializations, and admission process for legal education."
        keywords="law colleges, LL.B colleges, legal education, CLAT, law admission, law colleges bangalore, law colleges delhi, national law schools"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Law Colleges in Bangalore & Delhi
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover top law colleges offering LL.B programs with excellent legal education and career opportunities.
            </p>
          </div>
          
          {/* Law Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {lawStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.count}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Law Specializations */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Law Specializations</h2>
            <p className="text-lg text-gray-600">Explore various legal specializations and practice areas</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {lawSpecializations.map((specialization, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 hover:border-gray-300 border border-transparent transition-all cursor-pointer">
                <h3 className="font-medium text-gray-900">{specialization}</h3>
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
                {lawColleges.length} Law Colleges Found
              </h2>
              <p className="text-gray-600">
                {filters.city !== 'All' && `in ${filters.city}`}
              </p>
            </div>
            
            {lawColleges.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No law colleges found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {lawColleges.map((college) => (
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

export default Law;