import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Calculator, TrendingUp, Target, Award, BookOpen, Users } from 'lucide-react';

const CollegePredictor: React.FC = () => {
  const [formData, setFormData] = useState({
    examType: '',
    score: '',
    rank: '',
    category: '',
    state: '',
    preferences: []
  });
  
  const [predictions, setPredictions] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const examTypes = [
    'JEE Main',
    'JEE Advanced',
    'NEET',
    'CAT',
    'GATE',
    'CLAT',
    'CUET'
  ];

  const categories = [
    'General',
    'OBC',
    'SC',
    'ST',
    'EWS'
  ];

  const states = [
    'Karnataka',
    'Delhi',
    'All India'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePredict = () => {
    // Mock prediction logic
    const mockPredictions = [
      {
        collegeName: 'Indian Institute of Technology Delhi',
        branch: 'Computer Science Engineering',
        probability: 'High',
        cutoff: '150-200',
        fees: '₹2.5L per year',
        type: 'Government'
      },
      {
        collegeName: 'Indian Institute of Science Bangalore',
        branch: 'Engineering Sciences',
        probability: 'Medium',
        cutoff: '180-250',
        fees: '₹2L per year',
        type: 'Government'
      },
      {
        collegeName: 'Delhi Technological University',
        branch: 'Information Technology',
        probability: 'High',
        cutoff: '120-180',
        fees: '₹1.5L per year',
        type: 'Government'
      },
      {
        collegeName: 'RV College of Engineering',
        branch: 'Computer Science Engineering',
        probability: 'Very High',
        cutoff: '100-150',
        fees: '₹2L per year',
        type: 'Private'
      }
    ];
    
    setPredictions(mockPredictions);
    setShowResults(true);
  };

  const getProbabilityColor = (probability: string) => {
    switch (probability) {
      case 'Very High': return 'text-green-600 bg-green-100';
      case 'High': return 'text-blue-600 bg-blue-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "College Predictor Tool",
    "description": "Predict your college admission chances based on exam scores and ranks. Get personalized college recommendations for engineering, medical, and other courses.",
    "url": "https://indeduhub.com/college-predictor"
  };

  return (
    <>
      <SEO
        title="College Predictor - Predict Your Admission Chances"
        description="Use our college predictor tool to predict your admission chances based on JEE, NEET, CAT scores. Get personalized college recommendations and cutoff predictions."
        keywords="college predictor, admission predictor, JEE predictor, NEET predictor, CAT predictor, college admission chances, cutoff predictor"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            College Predictor Tool
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Predict your college admission chances based on your exam scores and get personalized recommendations.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Prediction Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center mb-6">
                <Calculator className="h-6 w-6 text-purple-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Predict Your College</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exam Type *
                  </label>
                  <select
                    name="examType"
                    value={formData.examType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select Exam</option>
                    {examTypes.map((exam) => (
                      <option key={exam} value={exam}>{exam}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Score *
                  </label>
                  <input
                    type="number"
                    name="score"
                    value={formData.score}
                    onChange={handleInputChange}
                    placeholder="Enter your score"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rank (if available)
                  </label>
                  <input
                    type="number"
                    name="rank"
                    value={formData.rank}
                    onChange={handleInputChange}
                    placeholder="Enter your rank"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State Quota *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <button
                onClick={handlePredict}
                disabled={!formData.examType || !formData.score || !formData.category || !formData.state}
                className="w-full mt-6 bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Predict My Colleges
              </button>
            </div>
            
            {/* Results */}
            {showResults && (
              <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Prediction Results</h3>
                
                <div className="space-y-4">
                  {predictions.map((prediction, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{prediction.collegeName}</h4>
                          <p className="text-gray-600">{prediction.branch}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProbabilityColor(prediction.probability)}`}>
                          {prediction.probability}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Cutoff Range</p>
                          <p className="font-medium">{prediction.cutoff}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Annual Fees</p>
                          <p className="font-medium">{prediction.fees}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Type</p>
                          <p className="font-medium">{prediction.type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* How it Works */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How it Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Enter Details</h4>
                    <p className="text-sm text-gray-600">Provide your exam score, rank, and category</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">AI Analysis</h4>
                    <p className="text-sm text-gray-600">Our algorithm analyzes historical data and trends</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Get Predictions</h4>
                    <p className="text-sm text-gray-600">Receive personalized college recommendations</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Accurate Predictions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-700">Historical Data Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span className="text-sm text-gray-700">Category-wise Results</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  <span className="text-sm text-gray-700">Multiple Exam Support</span>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prediction Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy Rate</span>
                  <span className="font-semibold text-purple-600">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students Helped</span>
                  <span className="font-semibold text-purple-600">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Colleges Covered</span>
                  <span className="font-semibold text-purple-600">1,000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegePredictor;