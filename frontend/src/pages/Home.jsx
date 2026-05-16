import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, UserCheck, Sprout, Search, ArrowRight, HeartPulse, Briefcase, Landmark, Home as HomeIcon, ShieldCheck, Baby, Accessibility } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const categories = [
    { name: 'Students', icon: GraduationCap, color: 'bg-blue-100 text-blue-600', path: '/schemes/student', desc: 'Scholarships, loans, and skill training' },
    { name: 'Women', icon: Users, color: 'bg-pink-100 text-pink-600', path: '/schemes/women', desc: 'Financial support and entrepreneurship' },
    { name: 'Senior Citizens', icon: UserCheck, color: 'bg-orange-100 text-orange-600', path: '/schemes/senior-citizen', desc: 'Pensions, health, and travel' },
    { name: 'Farmers', icon: Sprout, color: 'bg-green-100 text-green-600', path: '/schemes/farmer', desc: 'Insurance, subsidies, and loans' },
    { name: 'Health & Welfare', icon: HeartPulse, color: 'bg-red-100 text-red-600', path: '/schemes/health-welfare', desc: 'Health insurance and maternal care' },
    { name: 'Employment & Skills', icon: Briefcase, color: 'bg-indigo-100 text-indigo-600', path: '/schemes/employment-skill', desc: 'Skill training and employment guarantee' },
    { name: 'Financial & Banking', icon: Landmark, color: 'bg-yellow-100 text-yellow-600', path: '/schemes/financial-banking', desc: 'Loans, bank accounts, and savings' },
    { name: 'Housing', icon: HomeIcon, color: 'bg-teal-100 text-teal-600', path: '/schemes/housing', desc: 'Affordable housing and subsidies' },
    { name: 'Insurance & Pension', icon: ShieldCheck, color: 'bg-purple-100 text-purple-600', path: '/schemes/insurance-pension', desc: 'Life, accident and pension schemes' },
    { name: 'Child Welfare', icon: Baby, color: 'bg-cyan-100 text-cyan-600', path: '/schemes/child-welfare', desc: 'Nutrition, education and girl child schemes' },
    { name: 'Disability Support', icon: Accessibility, color: 'bg-rose-100 text-rose-600', path: '/schemes/disability', desc: 'Assistive devices and rehabilitation' },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span className="block">Find Government Schemes</span>
              <span className="block text-primary">Easily & Quickly</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              A simplified portal to help you discover eligibility, benefits, and application processes for various government initiatives.
            </motion.p>
            <div className="mt-10 max-w-xl mx-auto">
              <div className="relative rounded-full shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-11 pr-4 py-4 border-transparent bg-gray-100 rounded-full focus:ring-2 focus:ring-primary focus:bg-white text-gray-900 placeholder-gray-500 sm:text-sm"
                  placeholder="Search schemes by name or category..."
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary-light rounded-full blur-3xl opacity-30"></div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore by Category</h2>
          <p className="mt-4 text-gray-600">Select your profile to see relevant schemes</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={cat.path} className="block h-full p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group">
                <div className={`inline-flex items-center justify-center p-4 rounded-xl ${cat.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
                <div className="mt-6 flex items-center justify-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                  View Schemes <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-dark rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 md:flex items-center justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which scheme fits you?</h2>
              <p className="text-primary-light text-lg mb-8">Use our smart eligibility checker to find matching schemes based on your profile.</p>
              <Link to="/eligibility" className="inline-flex items-center px-8 py-4 bg-white text-primary-dark font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Check Eligibility Now
              </Link>
            </div>
            <div className="hidden md:block">
              <UserCheck className="h-48 w-48 text-white opacity-20" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
            <p className="mt-2 text-gray-600">Recently added or updated schemes</p>
          </div>
          <button className="text-primary font-semibold flex items-center hover:underline">
            See all updates <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <span className="inline-block px-3 py-1 bg-secondary-light text-secondary-dark text-xs font-bold rounded-full mb-4">NEW</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">PM YASASVI Scholarship 2024</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">Scholarship scheme for Other Backward Class (OBC), Economically Backward Class (EBC) and Nomadic and Semi-Nomadic Tribes.</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-xs text-gray-400">Last Date: 31 May 2024</span>
                <button className="text-primary text-sm font-semibold">Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
