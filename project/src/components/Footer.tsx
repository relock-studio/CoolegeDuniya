import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    'Top Colleges', 'Engineering Colleges', 'Medical Colleges', 'MBA Colleges',
    'Arts Colleges', 'Commerce Colleges', 'Science Colleges', 'Law Colleges'
  ];

  const examLinks = [
    'JEE Main', 'JEE Advanced', 'NEET', 'CAT', 'GATE', 'CLAT', 'MAT', 'XAT'
  ];

  const cityLinks = [
    'Colleges in Bangalore', 'Colleges in Delhi', 'Engineering in Bangalore',
    'Medical in Delhi', 'MBA in Bangalore', 'Arts in Delhi'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Stay Updated with Latest College News</h3>
          <p className="text-orange-100 mb-6">Get admission alerts, exam updates, and college notifications</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-orange-500" />
                <span className="ml-2 text-2xl font-bold">IndeduHub</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's largest platform for college discovery. Find the best colleges in Bangalore and Delhi, 
                compare courses, check fees, placements, and get expert guidance for your career.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Top Colleges</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Exams */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Top Exams</h3>
              <ul className="space-y-3">
                {examLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Cities */}
            <div>
              <h3 className="text-lg font-semibold mb-6">By Location</h3>
              <ul className="space-y-3">
                {cityLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-400">Email Us</p>
                  <p className="text-white">info@indeduhub.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-400">Call Us</p>
                  <p className="text-white">1800-572-9877</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-400">Office</p>
                  <p className="text-white">Bangalore & Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 IndeduHub. All rights reserved. | Made with ❤️ for students
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;