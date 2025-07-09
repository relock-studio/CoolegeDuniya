import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Star, ThumbsUp, MessageCircle, Filter, Search, User } from 'lucide-react';

const Reviews: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Engineering', 'Medical', 'Management', 'Arts', 'Science'];

  const reviews = [
    {
      id: 1,
      collegeName: 'Indian Institute of Science (IISc)',
      studentName: 'Rahul Sharma',
      course: 'M.Tech Computer Science',
      year: '2023',
      rating: 5,
      category: 'Engineering',
      title: 'Excellent Research Environment',
      content: 'IISc provides an outstanding research environment with world-class faculty and facilities. The campus is beautiful and the academic rigor is exceptional. Highly recommended for research-oriented students.',
      likes: 45,
      helpful: 38,
      verified: true,
      pros: ['World-class faculty', 'Research opportunities', 'Beautiful campus', 'Strong alumni network'],
      cons: ['Highly competitive', 'Limited social activities', 'Intense workload']
    },
    {
      id: 2,
      collegeName: 'All India Institute of Medical Sciences Delhi',
      studentName: 'Priya Patel',
      course: 'MBBS',
      year: '2022',
      rating: 5,
      category: 'Medical',
      title: 'Best Medical Education in India',
      content: 'AIIMS Delhi is undoubtedly the best medical college in India. The clinical exposure, faculty expertise, and infrastructure are unmatched. The competition is tough but worth it.',
      likes: 67,
      helpful: 52,
      verified: true,
      pros: ['Best faculty', 'Excellent clinical exposure', 'Top-notch infrastructure', 'Prestigious brand'],
      cons: ['Extremely competitive', 'High pressure environment', 'Limited seats']
    },
    {
      id: 3,
      collegeName: 'Indian Institute of Management Bangalore',
      studentName: 'Amit Kumar',
      course: 'MBA',
      year: '2023',
      rating: 4,
      category: 'Management',
      title: 'Great for Career Growth',
      content: 'IIM Bangalore offers excellent placement opportunities and industry connections. The curriculum is rigorous and faculty is experienced. Campus life is vibrant with many activities.',
      likes: 34,
      helpful: 28,
      verified: true,
      pros: ['Excellent placements', 'Industry connections', 'Experienced faculty', 'Strong brand value'],
      cons: ['High fees', 'Intense competition', 'Heavy workload']
    },
    {
      id: 4,
      collegeName: 'Delhi University (North Campus)',
      studentName: 'Sneha Gupta',
      course: 'B.A. English',
      year: '2022',
      rating: 4,
      category: 'Arts',
      title: 'Rich Academic Heritage',
      content: 'DU offers a great college experience with diverse student community and rich academic heritage. The faculty is knowledgeable and campus life is vibrant with many cultural activities.',
      likes: 29,
      helpful: 22,
      verified: true,
      pros: ['Diverse community', 'Cultural activities', 'Good faculty', 'Affordable fees'],
      cons: ['Outdated infrastructure', 'Bureaucratic processes', 'Limited practical exposure']
    },
    {
      id: 5,
      collegeName: 'Christ University',
      studentName: 'Karthik Reddy',
      course: 'B.Tech Information Technology',
      year: '2023',
      rating: 4,
      category: 'Engineering',
      title: 'Good Overall Experience',
      content: 'Christ University provides a good balance of academics and extracurricular activities. The infrastructure is modern and faculty is supportive. Placement support is decent.',
      likes: 18,
      helpful: 15,
      verified: true,
      pros: ['Modern infrastructure', 'Supportive faculty', 'Good placement support', 'Active campus life'],
      cons: ['Strict attendance policy', 'High fees', 'Limited research opportunities']
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesFilter = selectedFilter === 'All' || review.category === selectedFilter;
    const matchesSearch = review.collegeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "College Reviews - Student Experiences",
    "description": "Read authentic reviews from students about colleges in Bangalore and Delhi. Get insights about campus life, academics, placements, and facilities.",
    "url": "https://indeduhub.com/reviews"
  };

  return (
    <>
      <SEO
        title="College Reviews - Student Experiences & Ratings"
        description="Read authentic reviews from students about colleges in Bangalore and Delhi. Get real insights about campus life, academics, placements, faculty, and facilities."
        keywords="college reviews, student reviews, college ratings, campus life, college experience, student feedback, college testimonials"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            College Reviews & Ratings
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Read authentic reviews from students and make informed decisions about your college choice.
          </p>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedFilter === filter
                      ? 'bg-pink-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none w-64"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredReviews.length} Reviews Found
          </h2>
        </div>
        
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{review.collegeName}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{review.course}</span>
                    <span>•</span>
                    <span>Batch {review.year}</span>
                    {review.verified && (
                      <>
                        <span>•</span>
                        <span className="text-green-600 font-medium">Verified</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-semibold">{review.rating}</span>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{review.title}</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">{review.content}</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h5 className="font-medium text-green-700 mb-2">Pros:</h5>
                  <ul className="space-y-1">
                    {review.pros.map((pro, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-red-700 mb-2">Cons:</h5>
                  <ul className="space-y-1">
                    {review.cons.map((con, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{review.studentName}</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-pink-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-pink-600">
                    <MessageCircle className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Write Review CTA */}
      <div className="bg-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Your College Experience
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Help other students make informed decisions by sharing your honest review about your college.
          </p>
          <button className="bg-white text-pink-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Write a Review
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;