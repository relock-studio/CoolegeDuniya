import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Calendar, Clock, Tag, TrendingUp, User, Eye } from 'lucide-react';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Admission', 'Exam', 'Results', 'Placement', 'Policy'];

  const newsArticles = [
    {
      id: 1,
      title: 'JEE Main 2024 Registration Begins: Important Dates and Guidelines',
      category: 'Exam',
      excerpt: 'National Testing Agency (NTA) has announced the registration dates for JEE Main 2024. Students can apply online from December 1, 2023.',
      content: 'The Joint Entrance Examination (JEE) Main 2024 registration process has officially begun...',
      author: 'Education Desk',
      publishedAt: '2023-12-01',
      readTime: '3 min read',
      views: 15420,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JEE Main', 'Engineering', 'Admission', 'NTA']
    },
    {
      id: 2,
      title: 'NEET 2024: Medical Colleges Increase Seat Capacity by 10%',
      category: 'Admission',
      excerpt: 'Medical Council of India approves increase in MBBS seats across government and private medical colleges for the academic year 2024-25.',
      content: 'In a significant development for medical aspirants, the Medical Council of India has approved...',
      author: 'Medical Correspondent',
      publishedAt: '2023-11-28',
      readTime: '4 min read',
      views: 12350,
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NEET', 'Medical', 'MBBS', 'Seats']
    },
    {
      id: 3,
      title: 'IIT Placements 2024: Average Package Increases by 15%',
      category: 'Placement',
      excerpt: 'Indian Institutes of Technology report record-breaking placement statistics with highest package reaching ₹2.5 crores.',
      content: 'The placement season at IITs has concluded with remarkable results showing significant improvement...',
      author: 'Career Desk',
      publishedAt: '2023-11-25',
      readTime: '5 min read',
      views: 18750,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['IIT', 'Placements', 'Engineering', 'Salary']
    },
    {
      id: 4,
      title: 'New Education Policy: Major Changes in College Admission Process',
      category: 'Policy',
      excerpt: 'Ministry of Education announces significant reforms in college admission procedures under the New Education Policy 2024.',
      content: 'The Ministry of Education has unveiled comprehensive changes to the college admission process...',
      author: 'Policy Reporter',
      publishedAt: '2023-11-22',
      readTime: '6 min read',
      views: 9840,
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NEP', 'Policy', 'Admission', 'Reform']
    },
    {
      id: 5,
      title: 'CUET Results 2024: 89% Students Qualify for Central Universities',
      category: 'Results',
      excerpt: 'Common University Entrance Test results show impressive qualification rates with over 8.9 lakh students eligible for admission.',
      content: 'The Common University Entrance Test (CUET) results have been declared with encouraging statistics...',
      author: 'Results Team',
      publishedAt: '2023-11-20',
      readTime: '3 min read',
      views: 14200,
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CUET', 'Results', 'Central Universities', 'Admission']
    },
    {
      id: 6,
      title: 'Bangalore Colleges Report 95% Placement Rate in Engineering',
      category: 'Placement',
      excerpt: 'Top engineering colleges in Bangalore achieve exceptional placement statistics with major tech companies leading recruitment.',
      content: 'Engineering colleges across Bangalore have reported outstanding placement results for the 2023-24 academic year...',
      author: 'Bangalore Correspondent',
      publishedAt: '2023-11-18',
      readTime: '4 min read',
      views: 11680,
      image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Bangalore', 'Engineering', 'Placements', 'Tech Jobs']
    }
  ];

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Education News - College Admission & Exam Updates",
    "description": "Latest education news, college admission updates, exam notifications, and placement reports for students in Bangalore and Delhi.",
    "url": "https://indeduhub.com/news"
  };

  return (
    <>
      <SEO
        title="Education News - Latest College Admission & Exam Updates"
        description="Stay updated with latest education news, college admission notifications, exam dates, results, and placement reports for students in Bangalore and Delhi."
        keywords="education news, college admission news, exam updates, result notifications, placement news, education policy, student news"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education News & Updates
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay informed with the latest news on college admissions, exams, results, and education policies.
          </p>
        </div>
      </div>
      
      {/* News Categories */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
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
            {filteredNews.length} Articles Found
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {filteredNews.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Eye className="h-4 w-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending News */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                Trending News
              </h3>
              <div className="space-y-4">
                {newsArticles.slice(0, 5).map((article, index) => (
                  <div key={article.id} className="flex items-start space-x-3">
                    <span className="bg-orange-100 text-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{article.views.toLocaleString()} views</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <span className="text-gray-700">{category}</span>
                    <span className="text-xs text-gray-500">
                      {newsArticles.filter(article => article.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest education news delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;