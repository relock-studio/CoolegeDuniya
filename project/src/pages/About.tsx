import React from 'react';
import { GraduationCap, Users, Award, TrendingUp, Heart, Target, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const stats = [
    { icon: GraduationCap, label: 'Colleges Listed', count: '45,000+' },
    { icon: Users, label: 'Students Helped', count: '2M+' },
    { icon: Award, label: 'Expert Reviews', count: '10,000+' },
    { icon: TrendingUp, label: 'Success Rate', count: '95%' }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=f97316&color=fff&size=200',
      description: 'Former education consultant with 15+ years of experience in college admissions.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Content',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff&size=200',
      description: 'Education expert specializing in college rankings and admission processes.'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Lead',
      image: 'https://ui-avatars.com/api/?name=Amit+Patel&background=10b981&color=fff&size=200',
      description: 'Tech entrepreneur focused on making education accessible through technology.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About IndeduHub",
    "description": "Learn about IndeduHub's mission to help students find the best colleges in Bangalore and Delhi with expert guidance and comprehensive information.",
    "url": "https://indeduhub.com/about"
  };

  return (
    <>
      <SEO
        title="About IndeduHub - Your College Discovery Partner"
        description="Learn about IndeduHub's mission to help students find the best colleges in Bangalore and Delhi. Our story, team, and commitment to education excellence."
        keywords="about indeduhub, college discovery platform, education guidance, college admission help, student counseling"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About IndeduHub
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Empowering students to make informed decisions about their educational journey with comprehensive college information and expert guidance.
          </p>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To democratize access to quality education by providing comprehensive, accurate, and up-to-date information about colleges and courses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted platform for college discovery and admission guidance, helping millions of students achieve their dreams.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Transparency, accuracy, student-first approach, and commitment to educational excellence guide everything we do.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.count}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              IndeduHub was born from a simple observation: students and parents struggle to find reliable, comprehensive information about colleges and courses. Founded in 2020 by a team of education experts and technology enthusiasts, we set out to create a platform that would simplify the college discovery process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Started</h3>
              <p className="text-gray-600 mb-4">
                After witnessing countless students make uninformed decisions about their education due to lack of proper guidance and information, our founders decided to bridge this gap. We realized that with the right tools and information, every student could make better educational choices.
              </p>
              <p className="text-gray-600">
                Today, IndeduHub serves millions of students across India, helping them discover the perfect college for their career aspirations. We focus specifically on Bangalore and Delhi - two of India's most important educational hubs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">What Makes Us Different</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Verified college information and reviews</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Expert counseling and guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Real-time admission updates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Comprehensive comparison tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate educators and technologists working to transform education discovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact CTA */}
      <div className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect College?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join millions of students who trust IndeduHub for their educational journey. Start exploring colleges today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Explore Colleges
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;