import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Eligibility', path: '/eligibility' },
  ];

  const schemeCategories = [
    { name: 'Students', path: '/schemes/student' },
    { name: 'Women', path: '/schemes/women' },
    { name: 'Senior Citizens', path: '/schemes/senior-citizen' },
    { name: 'Farmers', path: '/schemes/farmer' },
    { name: 'Health & Welfare', path: '/schemes/health-welfare' },
    { name: 'Employment & Skills', path: '/schemes/employment-skill' },
    { name: 'Financial & Banking', path: '/schemes/financial-banking' },
    { name: 'Housing', path: '/schemes/housing' },
    { name: 'Insurance & Pension', path: '/schemes/insurance-pension' },
    { name: 'Child Welfare', path: '/schemes/child-welfare' },
    { name: 'Disability Support', path: '/schemes/disability' },
  ];

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary-dark">Gov<span className="text-secondary-dark">Schemes</span></span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="relative" onMouseLeave={() => setCategoriesOpen(false)}>
              <button 
                onMouseEnter={() => setCategoriesOpen(true)}
                className="flex items-center text-gray-600 hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Schemes
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {categoriesOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {schemeCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={cat.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setCategoriesOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center text-gray-600 hover:text-primary-dark px-3 py-2 rounded-md text-sm font-medium"
              >
                <Globe className="w-4 h-4 mr-1" />
                Language
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">తెలుగు (Telugu)</button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">हिन्दी (Hindi)</button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">தமிழ் (Tamil)</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-dark hover:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-2 pb-1 mt-2">
              <span className="block px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Schemes</span>
              {schemeCategories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-dark hover:bg-gray-50 pl-6"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
