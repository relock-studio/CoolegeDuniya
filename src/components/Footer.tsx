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

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {examLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {cityLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</Link>
            </div>