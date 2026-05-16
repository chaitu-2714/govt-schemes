import React, { useState } from 'react';
import axios from 'axios';
import { User, Briefcase, IndianRupee, Calendar, Search, CheckCircle2, ChevronRight, Globe, AlertTriangle, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'All',
    income: '',
    occupation: ''
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/eligibility/check`, formData);
      setResults(res.data);
    } catch (err) {
      console.error(err);
      // Mock results for demo
      setResults([
        { _id: '1', name: 'NSP Scholarships', category: 'Student', benefits: 'Up to ₹20,000' },
        { _id: '3', name: 'PM Matru Vandana Yojana', category: 'Women', benefits: '₹5,000' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyNow = (e, scheme) => {
    e.stopPropagation();
    if (scheme.officialWebsite) {
      window.open(scheme.officialWebsite, '_blank');
    }
  };

  const handleGoogleSearch = (e, schemeName) => {
    e.stopPropagation();
    const query = encodeURIComponent(schemeName + " apply online official website");
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Eligibility Checker</h1>
          <p className="text-gray-600 text-lg">Enter your details to find schemes you can apply for.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" /> Age
              </label>
              <input 
                type="number" 
                required
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                placeholder="e.g. 21"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <User className="h-4 w-4 text-primary" /> Gender
              </label>
              <select 
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
              >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <IndianRupee className="h-4 w-4 text-primary" /> Annual Family Income
              </label>
              <input 
                type="number" 
                required
                value={formData.income}
                onChange={(e) => setFormData({...formData, income: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                placeholder="e.g. 250000"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" /> Occupation
              </label>
              <select 
                value={formData.occupation}
                onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
              >
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Farmer">Farmer</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Retired">Retired</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full mt-10 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary-light"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <Search className="h-5 w-5" /> Find Matching Schemes
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {results && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="text-secondary h-6 w-6" /> 
                {results.length} Schemes Found for You
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {results.map((scheme) => (
                  <div 
                    key={scheme._id} 
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-primary transition-colors cursor-pointer"
                    onClick={() => setSelectedScheme(scheme)}
                  >
                    <div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{scheme.category}</span>
                      <h3 className="text-xl font-bold text-gray-900">{scheme.name}</h3>
                      <p className="text-gray-500 text-sm">{scheme.benefits}</p>
                    </div>
                    <button className="p-3 bg-gray-50 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                ))}
              </div>
              
              {results.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-500">No schemes found matching your criteria. Try adjusting the filters.</p>
                </div>
              )}
            </motion.div>
          )}

          {/* Scheme Detail Modal */}
          {selectedScheme && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedScheme(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {selectedScheme.category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">
                      {selectedScheme.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedScheme(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

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
                      <p className="text-sm text-gray-600">Last Date: <span className="font-bold">{selectedScheme.lastDate ? new Date(selectedScheme.lastDate).toLocaleDateString() : 'N/A'}</span></p>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EligibilityChecker;
