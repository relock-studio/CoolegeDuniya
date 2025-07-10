import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowLeft, Upload } from 'lucide-react';
import { useAdmin } from '../../contexts/AdminContext';
import { College } from '../../types/college';

const AdminCollegeForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { colleges, addCollege, updateCollege } = useAdmin();
  const isEditing = !!id;
  
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    city: 'Bangalore' as 'Bangalore' | 'Delhi',
    image: '',
    rating: 4.0,
    reviews: 0,
    fees: { min: 0, max: 0 },
    courses: [''],
    established: new Date().getFullYear(),
    type: 'Engineering' as College['type'],
    mode: 'Full-time' as College['mode'],
    accreditation: [''],
    highlights: [''],
    description: ''
  });

  useEffect(() => {
    if (isEditing && id) {
      const college = colleges.find(c => c.id === id);
      if (college) {
        setFormData({
          name: college.name,
          location: college.location,
          city: college.city,
          image: college.image,
          rating: college.rating,
          reviews: college.reviews,
          fees: college.fees,
          courses: college.courses,
          established: college.established,
          type: college.type,
          mode: college.mode,
          accreditation: college.accreditation,
          highlights: college.highlights,
          description: college.description
        });
      }
    }
  }, [isEditing, id, colleges]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const collegeData = {
      ...formData,
      courses: formData.courses.filter(course => course.trim() !== ''),
      accreditation: formData.accreditation.filter(acc => acc.trim() !== ''),
      highlights: formData.highlights.filter(highlight => highlight.trim() !== '')
    };

    if (isEditing && id) {
      updateCollege(id, collegeData);
    } else {
      addCollege(collegeData);
    }
    
    navigate('/admin/colleges');
  };

  const handleArrayChange = (field: 'courses' | 'accreditation' | 'highlights', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'courses' | 'accreditation' | 'highlights') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'courses' | 'accreditation' | 'highlights', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/admin/colleges')}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Edit College' : 'Add New College'}
          </h1>
          <p className="text-gray-600">
            {isEditing ? 'Update college information' : 'Add a new college to the database'}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
        {/* Basic Information */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                College Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <select
                value={formData.city}
                onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value as 'Bangalore' | 'Delhi' }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as College['type'] }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              >
                <option value="Engineering">Engineering</option>
                <option value="Medical">Medical</option>
                <option value="Management">Management</option>
                <option value="Arts">Arts</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Established Year *
              </label>
              <input
                type="number"
                value={formData.established}
                onChange={(e) => setFormData(prev => ({ ...prev, established: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mode *
              </label>
              <select
                value={formData.mode}
                onChange={(e) => setFormData(prev => ({ ...prev, mode: e.target.value as College['mode'] }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Online">Online</option>
              </select>
            </div>
          </div>
        </div>

        {/* Image and Rating */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Media & Rating</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL *
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating (1-5) *
              </label>
              <input
                type="number"
                min="1"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Reviews *
              </label>
              <input
                type="number"
                min="0"
                value={formData.reviews}
                onChange={(e) => setFormData(prev => ({ ...prev, reviews: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Fees */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Fees Structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Fees (₹) *
              </label>
              <input
                type="number"
                min="0"
                value={formData.fees.min}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  fees: { ...prev.fees, min: parseInt(e.target.value) }
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Fees (₹) *
              </label>
              <input
                type="number"
                min="0"
                value={formData.fees.max}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  fees: { ...prev.fees, max: parseInt(e.target.value) }
                }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            required
          />
        </div>

        {/* Courses */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Courses Offered *
          </label>
          {formData.courses.map((course, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={course}
                onChange={(e) => handleArrayChange('courses', index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Enter course name"
              />
              {formData.courses.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('courses', index)}
                  className="ml-2 px-3 py-2 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('courses')}
            className="text-orange-600 hover:text-orange-800 text-sm"
          >
            + Add Course
          </button>
        </div>

        {/* Accreditation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Accreditation *
          </label>
          {formData.accreditation.map((acc, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={acc}
                onChange={(e) => handleArrayChange('accreditation', index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Enter accreditation"
              />
              {formData.accreditation.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('accreditation', index)}
                  className="ml-2 px-3 py-2 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('accreditation')}
            className="text-orange-600 hover:text-orange-800 text-sm"
          >
            + Add Accreditation
          </button>
        </div>

        {/* Highlights */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Key Highlights *
          </label>
          {formData.highlights.map((highlight, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={highlight}
                onChange={(e) => handleArrayChange('highlights', index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Enter highlight"
              />
              {formData.highlights.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeArrayItem('highlights', index)}
                  className="ml-2 px-3 py-2 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayItem('highlights')}
            className="text-orange-600 hover:text-orange-800 text-sm"
          >
            + Add Highlight
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-6 border-t">
          <button
            type="button"
            onClick={() => navigate('/admin/colleges')}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>{isEditing ? 'Update College' : 'Add College'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminCollegeForm;