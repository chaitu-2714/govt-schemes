import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Send, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-primary-dark">Gov<span className="text-secondary-dark">Schemes</span></span>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Simplifying government schemes for every citizen. Our mission is to bridge the information gap and ensure every eligible person benefits from government initiatives.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/schemes/student" className="hover:text-primary transition-colors">Student Schemes</Link></li>
              <li><Link to="/schemes/women" className="hover:text-primary transition-colors">Women Schemes</Link></li>
              <li><Link to="/schemes/senior-citizen" className="hover:text-primary transition-colors">Senior Citizen Schemes</Link></li>
              <li><Link to="/schemes/farmer" className="hover:text-primary transition-colors">Farmer Schemes</Link></li>
              <li><Link to="/schemes/health-welfare" className="hover:text-primary transition-colors">Health &amp; Welfare</Link></li>
              <li><Link to="/schemes/employment-skill" className="hover:text-primary transition-colors">Employment &amp; Skills</Link></li>
              <li><Link to="/schemes/financial-banking" className="hover:text-primary transition-colors">Financial &amp; Banking</Link></li>
              <li><Link to="/schemes/housing" className="hover:text-primary transition-colors">Housing</Link></li>
              <li><Link to="/schemes/insurance-pension" className="hover:text-primary transition-colors">Insurance &amp; Pension</Link></li>
              <li><Link to="/schemes/child-welfare" className="hover:text-primary transition-colors">Child Welfare</Link></li>
              <li><Link to="/schemes/disability" className="hover:text-primary transition-colors">Disability Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link to="/eligibility" className="hover:text-primary transition-colors">Eligibility Checker</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@govschemes.in</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 1800-123-4567</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Delhi, India</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-primary-light hover:text-primary transition-all"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-primary-light hover:text-primary transition-all"><Send className="h-4 w-4" /></a>
              <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-primary-light hover:text-primary transition-all"><Camera className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-50 text-center text-sm text-gray-400">
          <p>© 2024 GovSchemes Portal. All rights reserved. Built for Awareness.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
