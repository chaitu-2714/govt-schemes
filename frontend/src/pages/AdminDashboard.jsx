import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Edit, Trash2, LayoutDashboard, LogOut, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '', category: 'Student', objective: '', benefits: '', requiredDocuments: '', applicationProcess: '', officialWebsite: '', lastDate: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
    fetchSchemes();
  }, []);

  const fetchSchemes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/schemes');
      setSchemes(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this scheme?')) {
      try {
        await axios.delete(`http://localhost:5000/api/schemes/${id}`);
        fetchSchemes();
      } catch (err) {
        alert('Delete failed');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <LayoutDashboard className="h-8 w-8 text-primary" /> Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Manage government schemes and announcements</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-all"
          >
            <Plus className="h-5 w-5" /> Add Scheme
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all"
          >
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Scheme Name</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Last Date</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {schemes.map((scheme) => (
              <tr key={scheme._id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-bold text-gray-900">{scheme.name}</div>
                  <div className="text-xs text-gray-500 truncate max-w-xs">{scheme.objective}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    scheme.category === 'Student' ? 'bg-blue-100 text-blue-600' :
                    scheme.category === 'Women' ? 'bg-pink-100 text-pink-600' :
                    scheme.category === 'Farmer' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {scheme.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(scheme.lastDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary-light rounded-lg transition-all"><Edit className="h-5 w-5" /></button>
                    <button onClick={() => handleDelete(scheme._id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"><Trash2 className="h-5 w-5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {schemes.length === 0 && !loading && (
          <div className="text-center py-20 text-gray-500">No schemes found. Add your first scheme!</div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
