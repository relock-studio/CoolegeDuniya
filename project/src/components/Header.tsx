import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, GraduationCap, Menu, X, ChevronDown, Phone, Mail, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navigationItems = [
    {
      title: 'Colleges',
      items: [
        { name: 'All Colleges', path: '/colleges' },
        { name: 'Engineering', path: '/engineering' },
        { name: 'Medical', path: '/medical' },
        { name: 'Management', path: '/mba' },
        { name: 'Arts & Science', path: '/arts' }
      ]
    },
    {
      title: 'Exams',
      items: [
        { name: 'All Exams', path: '/exams' },
        { name: 'JEE Main', path: '/exams?filter=jee-main' },
        { name: 'NEET', path: '/exams?filter=neet' },
        { name: 'CAT', path: '/exams?filter=cat' },
        { name: 'GATE', path: '/exams?filter=gate' }
      ]
    },
    {
      title: 'Courses',
      items: [
        { name: 'All Courses', path: '/courses' },
        { name: 'B.Tech', path: '/courses?filter=btech' },
        { name: 'MBBS', path: '/courses?filter=mbbs' },
        { name: 'MBA', path: '/courses?filter=mba' },
        { name: 'B.Sc', path: '/courses?filter=bsc' }
      ]
    },
    {
      title: 'News',
      items: [
        { name: 'All News', path: '/news' },
        { name: 'Admission News', path: '/news?category=admission' },
        { name: 'Exam Updates', path: '/news?category=exam' },
        { name: 'Results', path: '/news?category=results' }
      ]
    },
    {
      title: 'More',
      items: [
        { name: 'Scholarships', path: '/scholarships' },
        { name: 'Study Abroad', path: '/study-abroad' },
        { name: 'College Predictor', path: '/college-predictor' },
        { name: 'Reviews', path: '/reviews' }
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/colleges?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-orange-500 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>1800-572-9877</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@indeduhub.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/study-abroad" className="hover:underline">Study Abroad</Link>
            <span>|</span>
            <Link to="/write-review" className="hover:underline">Write Review</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold text-gray-900">IndeduHub</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navigationItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search colleges, courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none w-64"
                />
              </form>
              
              {user ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{user.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Login
                </Link>
              )}
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-orange-500 p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <form onSubmit={handleSearch} className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search colleges, courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none w-full"
                />
              </form>
              {navigationItems.map((item) => (
                <div key={item.title} className="py-2">
                  <div className="font-medium text-gray-900 px-3 py-2">{item.title}</div>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-6 py-2 text-sm text-gray-600 hover:text-orange-500"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ))}
              {user ? (
                <div className="border-t pt-4">
                  <div className="flex items-center px-3 py-2">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-6 py-2 text-sm text-gray-600 hover:text-orange-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block w-full bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors mt-4 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;