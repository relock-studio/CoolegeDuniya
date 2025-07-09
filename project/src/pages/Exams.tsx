import React, { useState } from 'react';
import SEO from '../components/SEO';
import { FileText, Calendar, Users, Award, Clock, TrendingUp } from 'lucide-react';

const Exams: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const examCategories = ['All', 'Engineering', 'Medical', 'Management', 'Law', 'Arts'];

  const exams = [
    {
      name: 'JEE Main',
      category: 'Engineering',
      conductedBy: 'NTA',
      frequency: 'Twice a year',
      applicationFee: '₹650-3000',
      eligibility: '12th with PCM',
      examDate: 'January & April',
      description: 'National level entrance exam for engineering admissions in NITs, IIITs, and other institutions.',
      acceptedBy: 1000,
      difficulty: 'High'
    },
    {
      name: 'NEET',
      category: 'Medical',
      conductedBy: 'NTA',
      frequency: 'Once a year',
      applicationFee: '₹1600-8000',
      eligibility: '12th with PCB',
      examDate: 'May',
      description: 'National eligibility entrance test for medical and dental courses in India.',
      acceptedBy: 550,
      difficulty: 'Very High'
    },
    {
      name: 'CAT',
      category: 'Management',
      conductedBy: 'IIMs',
      frequency: 'Once a year',
      applicationFee: '₹2300',
      eligibility: 'Graduation',
      examDate: 'November',
      description: 'Common Admission Test for admission to IIMs and other top B-schools.',
      acceptedBy: 1000,
      difficulty: 'Very High'
    },
    {
      name: 'CLAT',
      category: 'Law',
      conductedBy: 'NLUs',
      frequency: 'Once a year',
      applicationFee: '₹4000',
      eligibility: '12th pass',
      examDate: 'May',
      description: 'Common Law Admission Test for admission to National Law Universities.',
      acceptedBy: 22,
      difficulty: 'High'
    },
    {
      name: 'CUET',
      category: 'Arts',
      conductedBy: 'NTA',
      frequency: 'Once a year',
      applicationFee: '₹650-2650',
      eligibility: '12th pass',
      examDate: 'May-June',
      description: 'Common University Entrance Test for admission to central universities.',
      acceptedBy: 200,
      difficulty: 'Medium'
    },
    {
      name: 'GATE',
      category: 'Engineering',
      conductedBy: 'IITs/IISc',
      frequency: 'Once a year',
      applicationFee: '₹1700-3400',
      eligibility: 'B.Tech/B.E.',
      examDate: 'February',
      description: 'Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs.',
      acceptedBy: 900,
      difficulty: 'High'
    }
  ];

  const filteredExams = selectedCategory === 'All' 
    ? exams 
    : exams.filter(exam => exam.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Entrance Exams for Colleges in Bangalore & Delhi",
    "description": "Complete information about entrance exams for admission to colleges in Bangalore and Delhi including JEE, NEET, CAT, CLAT, and more.",
    "url": "https://indeduhub.com/exams"
  };

  return (
    <>
      <SEO
        title="Entrance Exams for Bangalore & Delhi Colleges - Complete Guide"
        description="Get complete information about entrance exams for admission to colleges in Bangalore and Delhi. JEE Main, NEET, CAT, CLAT exam dates, eligibility, and preparation tips."
        keywords="entrance exams, JEE Main, NEET, CAT, CLAT, GATE, exam dates, eligibility, application form, exam preparation"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entrance Exams Guide
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Complete information about entrance exams for college admissions in Bangalore and Delhi.
          </p>
        </div>
      </div>
      
      {/* Exam Categories */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {examCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-500 text-white'
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
            {filteredExams.length} Exams Found
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exam.name}</h3>
                    <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                      {exam.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Difficulty</p>
                    <span className={`text-sm font-medium ${
                      exam.difficulty === 'Very High' ? 'text-red-600' :
                      exam.difficulty === 'High' ? 'text-orange-600' :
                      'text-green-600'
                    }`}>
                      {exam.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{exam.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Conducted By</p>
                      <p className="text-sm font-medium">{exam.conductedBy}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Exam Date</p>
                      <p className="text-sm font-medium">{exam.examDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Frequency</p>
                      <p className="text-sm font-medium">{exam.frequency}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Application Fee</p>
                      <p className="text-sm font-medium">{exam.applicationFee}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Eligibility</p>
                      <p className="text-sm font-medium">{exam.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-400 mr-3" />
                    <div>
                      <p className="text-xs text-gray-500">Accepted By</p>
                      <p className="text-sm font-medium">{exam.acceptedBy}+ Colleges</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors text-sm">
                    Apply Now
                  </button>
                  <button className="flex-1 border border-indigo-500 text-indigo-500 py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors text-sm">
                    Exam Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exams;