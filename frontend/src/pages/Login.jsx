import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Lock, User, LogIn } from 'lucide-react';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-primary-light text-primary rounded-2xl mb-4">
            <Lock className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-500 mt-2">Enter credentials to access dashboard</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 flex items-center gap-2">
            <span className="font-bold">Error:</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <User className="h-4 w-4 text-primary" /> Username
            </label>
            <input 
              type="text" 
              required
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
              placeholder="admin"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" /> Password
            </label>
            <input 
              type="password" 
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-light"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <>
                <LogIn className="h-5 w-5" /> Sign In
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
