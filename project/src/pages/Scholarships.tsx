import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Award, DollarSign, Calendar, Users, BookOpen, TrendingUp, Clock, FileText } from 'lucide-react';

const Scholarships: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Merit-based', 'Need-based', 'Sports', 'Minority', 'Government'];

  const scholarships = [
    {
      name: 'National Scholarship Portal',
      provider: 'Government of India',
      category: 'Government',
      amount: '₹10,000-80,000',
      eligibility: 'Various criteria based on scheme',
      deadline: 'October 31, 2024',
      applicants: 50000,
      description: 'Central sector scheme providing scholarships to meritorious students from economically weaker sections.',
      benefits: ['Tuition fee coverage', 'Maintenance allowance', 'Book allowance']
    },
    {
      name: 'INSPIRE Scholarship',
      provider: 'Department of Science & Technology',
      category: 'Merit-based',
      amount: '₹80,000 per year',
      eligibility: 'Top 1% in Class XII (Science)',
      deadline: 'July 31, 2024',
      applicants: 10000,
      description: 'Scholarship for pursuing undergraduate courses in Natural and Basic Sciences.',
      benefits: ['Annual scholarship', 'Summer research fellowship', 'Mentorship']
    },
    {
      name: 'Kishore Vaigyanik Protsahan Yojana',
      provider: 'Indian Institute of Science',
      category: 'Merit-based',
      amount: '₹7,000 per month',
      eligibility: 'KVPY exam qualified',
      deadline: 'September 15, 2024',
      applicants: 15000,
      description: 'Fellowship program to encourage students to pursue research careers in science.',
      benefits: ['Monthly fellowship', 'Annual contingency', 'Research opportunities']
    },
    {
      name: 'Post Matric Scholarship',
      provider: 'Ministry of Social Justice',
      category: 'Minority',
      amount: '₹1,200-5,700 per month',
      eligibility: 'SC/ST/OBC students',
      deadline: 'November 30, 2024',
      applicants: 100000,
      description: 'Financial assistance for SC/ST/OBC students pursuing higher education.',
      benefits: ['Maintenance allowance', 'Tuition fee reimbursement', 'Book allowance']
    },
    {
      name: 'Sports Scholarship Scheme',
      provider: 'Ministry of Youth Affairs',
      category: 'Sports',
      amount: '₹25,000-50,000',
      eligibility: 'National/International sports achievements',
      deadline: 'August 31, 2024',
      applicants: 5000,
      description: 'Financial support for talented sports persons pursuing higher education.',
      benefits: ['Annual scholarship', 'Sports equipment', 'Coaching support']
    },
    {
      name: 'Begum Hazrat Mahal Scholarship',
      provider: 'Maulana Azad Education Foundation',
      category: 'Minority',
      amount: '₹5,000-12,000',
      eligibility: 'Minority girl students',
      deadline: 'September 30, 2024',
      applicants: 25000,
      description: 'Scholarship for minority girl students pursuing technical and professional courses.',
      benefits: ['Course fee assistance', 'Maintenance allowance', 'Book grant']
    }
  ];

  const filteredScholarships = selectedCategory === 'All' 
    ? scholarships 
    : scholarships.filter(scholarship => scholarship.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Scholarships for Students in Bangalore & Delhi",
    "description": "Find scholarships and financial aid opportunities for students in Bangalore and Delhi. Merit-based, need-based, and government scholarships available.",
    "url": "https://indeduhub.com/scholarships"
  };

  return (
    <>
      <SEO
        title="Scholarships for Students in Bangalore & Delhi - Financial Aid"
        description="Discover scholarships and financial aid opportunities for students in Bangalore and Delhi. Merit-based, need-based, government, and private scholarships available."
        keywords="scholarships, financial aid, student scholarships, merit scholarships, need based scholarships, government scholarships, education funding"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Scholarships & Financial Aid
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Discover funding opportunities to support your educational journey in Bangalore and Delhi.
          </p>
        </div>
      </div>
      
      {/* Scholarship Categories */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredScholarships.length} Scholarships Available
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((scholarship, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{scholarship.name}</h3>
                    <p className="text-sm text-gray-600">{scholarship.provider}</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    {scholarship.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{scholarship.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Amount</p>
                      <p className="text-sm font-medium">{scholarship.amount}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Eligibility</p>
                      <p className="text-sm font-medium">{scholarship.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Deadline</p>
                      <p className="text-sm font-medium">{scholarship.deadline}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Applicants</p>
                      <p className="text-sm font-medium">{scholarship.applicants.toLocaleString()}+</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Benefits:</p>
                  <div className="space-y-1">
                    {scholarship.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-xs text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                    Apply Now
                  </button>
                  <button className="flex-1 border border-yellow-500 text-yellow-500 py-2 px-4 rounded-lg hover:bg-yellow-50 transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scholarship Tips */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Scholarship Application Tips</h2>
            <p className="text-lg text-gray-600">Increase your chances of securing financial aid</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Early</h3>
              <p className="text-gray-600 text-sm">Start your application process well before deadlines to avoid last-minute rush.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Documentation</h3>
              <p className="text-gray-600 text-sm">Ensure all required documents are properly filled and submitted.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Highlight Achievements</h3>
              <p className="text-gray-600 text-sm">Showcase your academic, extracurricular, and community achievements.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scholarships;