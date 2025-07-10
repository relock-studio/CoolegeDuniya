import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Top Colleges', path: '/colleges' },
    { name: 'Engineering Colleges', path: '/engineering' },
    { name: 'Medical Colleges', path: '/medical' },
    { name: 'MBA Colleges', path: '/mba' },
    { name: 'Arts Colleges', path: '/arts' },
    { name: 'Commerce Colleges', path: '/commerce' },
    { name: 'Science Colleges', path: '/science' },
    { name: 'Law Colleges', path: '/law' }
  ];

  const examLinks = [
    { name: 'JEE Main', path: '/exams?exam=jee-main' },
    { name: 'JEE Advanced', path: '/exams?exam=jee-advanced' },
    { name: 'NEET', path: '/exams?exam=neet' },
    { name: 'CAT', path: '/exams?exam=cat' },
    { name: 'GATE', path: '/exams?exam=gate' },
    { name: 'CLAT', path: '/exams?exam=clat' },
    { name: 'MAT', path: '/exams?exam=mat' },
    { name: 'XAT', path: '/exams?exam=xat' }
  ];

  const cityLinks = [
    { name: 'Colleges in Bangalore', path: '/bangalore-colleges' },
    { name: 'Colleges in Delhi', path: '/delhi-colleges' },
    { name: 'Engineering in Bangalore', path: '/engineering?city=Bangalore' },
    { name: 'Medical in Delhi', path: '/medical?city=Delhi' },
    { name: 'MBA in Bangalore', path: '/mba?city=Bangalore' },
    { name: 'Arts in Delhi', path: '/arts?city=Delhi' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">EduConnect</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect college and career path. 
              Connecting students with their dream institutions since 2020.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exams */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Exams</h3>
            <ul className="space-y-3">
              {examLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Cities</h3>
            <ul className="space-y-3">
              {cityLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-500" />
              <span className="text-gray-400 text-sm">contact@educonnect.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-500" />
              <span className="text-gray-400 text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-500" />
              <span className="text-gray-400 text-sm">Bangalore, Karnataka, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EduConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;