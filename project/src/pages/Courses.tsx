import React, { useState } from 'react';
import SEO from '../components/SEO';
import { BookOpen, Clock, Award, TrendingUp, Users, Star } from 'lucide-react';

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const courseCategories = ['All', 'Engineering', 'Medical', 'Management', 'Arts', 'Science', 'Commerce', 'Law'];

  const courses = [
    {
      name: 'B.Tech Computer Science',
      category: 'Engineering',
      duration: '4 years',
      level: 'Undergraduate',
      avgFees: '₹2-8L per year',
      colleges: 150,
      rating: 4.5,
      description: 'Comprehensive program covering programming, algorithms, software engineering, and emerging technologies.',
      skills: ['Programming', 'Data Structures', 'Software Development', 'AI/ML']
    },
    {
      name: 'MBBS',
      category: 'Medical',
      duration: '5.5 years',
      level: 'Undergraduate',
      avgFees: '₹50K-25L per year',
      colleges: 25,
      rating: 4.8,
      description: 'Medical degree program for aspiring doctors with clinical training and internship.',
      skills: ['Medical Knowledge', 'Patient Care', 'Diagnosis', 'Surgery']
    },
    {
      name: 'MBA',
      category: 'Management',
      duration: '2 years',
      level: 'Postgraduate',
      avgFees: '₹5-25L per year',
      colleges: 80,
      rating: 4.3,
      description: 'Master of Business Administration with specializations in various domains.',
      skills: ['Leadership', 'Strategy', 'Finance', 'Marketing']
    },
    {
      name: 'B.A. English',
      category: 'Arts',
      duration: '3 years',
      level: 'Undergraduate',
      avgFees: '₹20K-1L per year',
      colleges: 120,
      rating: 4.1,
      description: 'Liberal arts program focusing on literature, language, and communication skills.',
      skills: ['Writing', 'Communication', 'Critical Thinking', 'Research']
    },
    {
      name: 'B.Sc Physics',
      category: 'Science',
      duration: '3 years',
      level: 'Undergraduate',
      avgFees: '₹30K-2L per year',
      colleges: 90,
      rating: 4.2,
      description: 'Science program covering theoretical and experimental physics concepts.',
      skills: ['Mathematical Analysis', 'Research', 'Problem Solving', 'Laboratory Skills']
    },
    {
      name: 'B.Com',
      category: 'Commerce',
      duration: '3 years',
      level: 'Undergraduate',
      avgFees: '₹25K-1.5L per year',
      colleges: 200,
      rating: 4.0,
      description: 'Commerce program covering accounting, finance, and business fundamentals.',
      skills: ['Accounting', 'Finance', 'Business Analysis', 'Taxation']
    },
    {
      name: 'LLB',
      category: 'Law',
      duration: '3 years',
      level: 'Undergraduate',
      avgFees: '₹50K-3L per year',
      colleges: 45,
      rating: 4.4,
      description: 'Law degree program covering legal principles, procedures, and practice.',
      skills: ['Legal Research', 'Advocacy', 'Legal Writing', 'Case Analysis']
    }
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Courses in Bangalore & Delhi Colleges",
    "description": "Complete list of courses offered by colleges in Bangalore and Delhi including engineering, medical, MBA, arts, science, and commerce programs.",
    "url": "https://indeduhub.com/courses"
  };

  return (
    <>
      <SEO
        title="Courses in Bangalore & Delhi Colleges - Complete List"
        description="Explore all courses offered by colleges in Bangalore and Delhi. Find detailed information about B.Tech, MBBS, MBA, B.A., B.Sc, B.Com, and other programs."
        keywords="courses bangalore delhi, engineering courses, medical courses, MBA courses, arts courses, science courses, commerce courses, course fees, admission"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Courses in Bangalore & Delhi
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover comprehensive course information, fees, duration, and career prospects.
          </p>
        </div>
      </div>
      
      {/* Course Categories */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {courseCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
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
            {filteredCourses.length} Courses Found
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{course.name}</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {course.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-medium">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Level</p>
                      <p className="text-sm font-medium">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Avg. Fees</p>
                      <p className="text-sm font-medium">{course.avgFees}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Colleges</p>
                      <p className="text-sm font-medium">{course.colleges}+</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                  View Colleges
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;