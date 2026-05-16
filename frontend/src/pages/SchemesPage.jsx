import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Filter, Calendar, FileText, ChevronRight, ExternalLink, Globe, AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SchemesPage = ({ category }) => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedScheme, setSelectedScheme] = useState(null);

  useEffect(() => {
    fetchSchemes();
  }, [category]);

  const fetchSchemes = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/schemes?category=${encodeURIComponent(category)}`);
      setSchemes(res.data);
    } catch (err) {
      console.error(err);
      setSchemes([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredSchemes = schemes.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.objective.toLowerCase().includes(search.toLowerCase())
  );

  // Build a reliable Google search URL as fallback
  const getGoogleSearchUrl = (schemeName) => {
    return `https://www.google.com/search?q=${encodeURIComponent(schemeName + ' official government website India')}`;
  };

  // Open the official URL - if it might fail, open Google search in another tab as backup
  const handleApplyNow = (e, scheme) => {
    // Always open the official website
    window.open(scheme.officialWebsite, '_blank', 'noopener,noreferrer');
  };

  const handleGoogleSearch = (e, schemeName) => {
    e.stopPropagation();
    window.open(getGoogleSearchUrl(schemeName), '_blank', 'noopener,noreferrer');
  };

  const categoryIcons = {
    'Student': '🎓',
    'Women': '👩',
    'Senior Citizen': '👴',
    'Farmer': '🌾',
    'Health & Welfare': '🏥',
    'Employment & Skill Development': '💼',
    'Financial & Banking': '🏦',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{categoryIcons[category] || '📋'}</span>
          <h1 className="text-3xl font-bold text-gray-900">{category} Schemes</h1>
        </div>
        <p className="text-gray-500 ml-12 mb-6">
          {schemes.length} scheme{schemes.length !== 1 ? 's' : ''} available
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search schemes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 font-medium transition-colors">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : filteredSchemes.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-500 text-lg">No schemes found.</p>
          <p className="text-gray-400 text-sm mt-2">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <motion.div
              layoutId={scheme._id}
              key={scheme._id}
              onClick={() => setSelectedScheme(scheme)}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors pr-2">{scheme.name}</h3>
                <ChevronRight className="text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </div>
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">{scheme.objective}</p>

              <div className="grid grid-cols-2 gap-4 text-xs font-medium text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>Last Date: {new Date(scheme.lastDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span>{scheme.requiredDocuments?.length || 0} Documents</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedScheme && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setSelectedScheme(null)}
          >
            <motion.div
              layoutId={selectedScheme._id}
              className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedScheme(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>

              <span className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary text-xs font-bold rounded-full mb-3">
                {selectedScheme.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedScheme.name}</h2>
              <p className="text-gray-600 mb-8">{selectedScheme.objective}</p>

              <div className="space-y-8">
                <section>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                    <span className="w-2 h-6 bg-primary rounded-full"></span>
                    Eligibility Criteria
                  </h4>
                  <p className="text-gray-700 bg-blue-50 p-4 rounded-xl">
                    {selectedScheme.eligibility?.criteriaDescription || 'Please check the official website for eligibility details.'}
                  </p>
                </section>

                <section>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                    <span className="w-2 h-6 bg-green-500 rounded-full"></span>
                    Benefits
                  </h4>
                  <p className="text-gray-700">{selectedScheme.benefits}</p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <section>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                      <span className="w-2 h-6 bg-accent rounded-full"></span>
                      Required Documents
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {selectedScheme.requiredDocuments?.map((doc, idx) => (
                        <li key={idx}>{doc}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                      <span className="w-2 h-6 bg-gray-400 rounded-full"></span>
                      Important Info
                    </h4>
                    <p className="text-sm text-gray-600">Last Date: <span className="font-bold">{new Date(selectedScheme.lastDate).toLocaleDateString()}</span></p>
                  </section>
                </div>

                <section>
                  <h4 className="font-bold text-gray-900 flex items-center gap-2 mb-3">
                    <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
                    Application Process
                  </h4>
                  <p className="text-gray-700 mb-6">{selectedScheme.applicationProcess}</p>

                  {/* Link Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Primary: Official Website */}
                    <button
                      onClick={(e) => handleApplyNow(e, selectedScheme)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      Official Website
                      <ExternalLink className="h-3 w-3" />
                    </button>

                    {/* Fallback: Google Search */}
                    <button
                      onClick={(e) => handleGoogleSearch(e, selectedScheme.name)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-primary hover:text-primary transition-colors"
                    >
                      <Search className="h-4 w-4" />
                      Search on Google
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>

                  {/* Info banner for DNS errors */}
                  <div className="mt-4 flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-700">
                      If the official website doesn't open (DNS error), use the <strong>"Search on Google"</strong> button to find the scheme and apply directly.
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SchemesPage;
