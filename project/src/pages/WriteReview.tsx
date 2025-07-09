import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Star, Upload, CheckCircle } from 'lucide-react';

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    collegeName: '',
    course: '',
    graduationYear: '',
    overallRating: 0,
    academicsRating: 0,
    facultyRating: 0,
    infrastructureRating: 0,
    placementRating: 0,
    campusLifeRating: 0,
    reviewTitle: '',
    reviewContent: '',
    pros: [''],
    cons: [''],
    wouldRecommend: '',
    isAnonymous: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRatingChange = (category: string, rating: number) => {
    setFormData(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleArrayChange = (field: 'pros' | 'cons', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'pros' | 'cons') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'pros' | 'cons', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/reviews');
    }, 3000);
  };

  const RatingStars = ({ rating, onRatingChange, label }: { rating: number; onRatingChange: (rating: number) => void; label: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`h-8 w-8 ${
              star <= rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            } hover:text-yellow-500 transition-colors`}
          >
            <Star className="h-full w-full" />
          </button>
        ))}
      </div>
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Thank you for sharing your experience. Your review will help other students make informed decisions.
          </p>
          <p className="text-sm text-gray-500">Redirecting to reviews page...</p>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Write College Review",
    "description": "Share your college experience by writing a detailed review. Help other students make informed decisions about their education.",
    "url": "https://indeduhub.com/write-review"
  };

  return (
    <>
      <SEO
        title="Write College Review - Share Your Experience"
        description="Share your college experience by writing a detailed review. Help other students make informed decisions about their education and college choice."
        keywords="write college review, college feedback, student review, college experience, rate college, college testimonial"
        structuredData={structuredData}
      />
      
      <div className="bg-gradient-to-r from-green-500 to-teal-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Write a College Review
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Share your honest experience and help other students make informed decisions about their college choice.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border p-8">
          {/* Basic Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  College Name *
                </label>
                <input
                  type="text"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  placeholder="Enter college name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course/Program *
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  placeholder="e.g., B.Tech Computer Science"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Graduation Year *
                </label>
                <select
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                  required
                >
                  <option value="">Select Year</option>
                  {Array.from({ length: 10 }, (_, i) => 2024 - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Ratings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rate Your Experience</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <RatingStars
                rating={formData.overallRating}
                onRatingChange={(rating) => handleRatingChange('overallRating', rating)}
                label="Overall Rating *"
              />
              
              <RatingStars
                rating={formData.academicsRating}
                onRatingChange={(rating) => handleRatingChange('academicsRating', rating)}
                label="Academics"
              />
              
              <RatingStars
                rating={formData.facultyRating}
                onRatingChange={(rating) => handleRatingChange('facultyRating', rating)}
                label="Faculty"
              />
              
              <RatingStars
                rating={formData.infrastructureRating}
                onRatingChange={(rating) => handleRatingChange('infrastructureRating', rating)}
                label="Infrastructure"
              />
              
              <RatingStars
                rating={formData.placementRating}
                onRatingChange={(rating) => handleRatingChange('placementRating', rating)}
                label="Placements"
              />
              
              <RatingStars
                rating={formData.campusLifeRating}
                onRatingChange={(rating) => handleRatingChange('campusLifeRating', rating)}
                label="Campus Life"
              />
            </div>
          </div>
          
          {/* Review Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Review</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Review Title *
              </label>
              <input
                type="text"
                name="reviewTitle"
                value={formData.reviewTitle}
                onChange={handleInputChange}
                placeholder="Summarize your experience in one line"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Review *
              </label>
              <textarea
                name="reviewContent"
                value={formData.reviewContent}
                onChange={handleInputChange}
                rows={6}
                placeholder="Share your detailed experience about the college, academics, faculty, infrastructure, placements, and campus life..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
          
          {/* Pros and Cons */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros & Cons</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What did you like? (Pros)
                </label>
                {formData.pros.map((pro, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={pro}
                      onChange={(e) => handleArrayChange('pros', index, e.target.value)}
                      placeholder="Enter a positive point"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                    {formData.pros.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('pros', index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('pros')}
                  className="text-green-600 hover:text-green-700 text-sm"
                >
                  + Add another pro
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What could be improved? (Cons)
                </label>
                {formData.cons.map((con, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={con}
                      onChange={(e) => handleArrayChange('cons', index, e.target.value)}
                      placeholder="Enter an area for improvement"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    />
                    {formData.cons.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem('cons', index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem('cons')}
                  className="text-green-600 hover:text-green-700 text-sm"
                >
                  + Add another con
                </button>
              </div>
            </div>
          </div>
          
          {/* Recommendation */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Would you recommend this college to others? *
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="wouldRecommend"
                  value="yes"
                  checked={formData.wouldRecommend === 'yes'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  required
                />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="wouldRecommend"
                  value="no"
                  checked={formData.wouldRecommend === 'no'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">No</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="wouldRecommend"
                  value="maybe"
                  checked={formData.wouldRecommend === 'maybe'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <span className="ml-2 text-gray-700">Maybe</span>
              </label>
            </div>
          </div>
          
          {/* Privacy */}
          <div className="mb-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={(e) => setFormData(prev => ({ ...prev, isAnonymous: e.target.checked }))}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">Submit this review anonymously</span>
            </label>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !formData.overallRating || !formData.collegeName || !formData.course || !formData.graduationYear || !formData.reviewTitle || !formData.reviewContent || !formData.wouldRecommend}
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit Review'
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WriteReview;