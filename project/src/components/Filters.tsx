import React from 'react';
import { Filter, X, Sliders } from 'lucide-react';
import { cities, collegeTypes, feesRanges } from '../data/colleges';
import { FilterOptions } from '../types/college';

interface FiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange, isOpen, setIsOpen }) => {
  const handleCityChange = (city: string) => {
    onFilterChange({ ...filters, city });
  };

  const handleTypeChange = (type: string) => {
    onFilterChange({ ...filters, type });
  };

  const handleFeesChange = (range: [number, number]) => {
    onFilterChange({ ...filters, feesRange: range });
  };

  const handleRatingChange = (rating: number) => {
    onFilterChange({ ...filters, rating });
  };

  const clearFilters = () => {
    onFilterChange({
      city: 'All',
      type: 'All',
      feesRange: [0, 10000000],
      rating: 0,
      searchQuery: filters.searchQuery
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.city !== 'All') count++;
    if (filters.type !== 'All') count++;
    if (filters.feesRange[0] !== 0 || filters.feesRange[1] !== 10000000) count++;
    if (filters.rating !== 0) count++;
    return count;
  };

  return (
    <>
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <Sliders className="h-5 w-5 text-orange-500" />
            <span className="font-medium">Filters</span>
            {getActiveFiltersCount() > 0 && (
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {getActiveFiltersCount()}
              </span>
            )}
          </div>
          <Filter className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-white rounded-lg shadow-sm border`}>
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sliders className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              {getActiveFiltersCount() > 0 && (
                <span className="bg-orange-100 text-orange-600 text-sm px-2 py-1 rounded-full">
                  {getActiveFiltersCount()} active
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearFilters}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                Clear all
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Location</h4>
            <div className="space-y-3">
              {cities.map((city) => (
                <label key={city} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="city"
                    value={city}
                    checked={filters.city === city}
                    onChange={() => handleCityChange(city)}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{city}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Stream</h4>
            <div className="space-y-3">
              {collegeTypes.map((type) => (
                <label key={type} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={filters.type === type}
                    onChange={() => handleTypeChange(type)}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Fees Range</h4>
            <div className="space-y-3">
              {feesRanges.map((range) => (
                <label key={range.label} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="fees"
                    value={range.label}
                    checked={filters.feesRange[0] === range.value[0] && filters.feesRange[1] === range.value[1]}
                    onChange={() => handleFeesChange(range.value as [number, number])}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Rating</h4>
            <div className="space-y-3">
              {[4.5, 4.0, 3.5, 3.0, 0].map((rating) => (
                <label key={rating} className="flex items-center cursor-pointer group">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.rating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                    {rating === 0 ? 'Any rating' : `${rating}+ stars`}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;