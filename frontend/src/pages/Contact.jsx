import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-10">Have questions about a scheme? Need help with the portal? Our team is here to assist you.</p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="p-4 bg-primary-light text-primary rounded-2xl h-fit"><Mail className="h-6 w-6" /></div>
              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <p className="text-gray-500">support@govschemes.in</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-secondary-light text-secondary rounded-2xl h-fit"><Phone className="h-6 w-6" /></div>
              <div>
                <h4 className="font-bold text-gray-900">Call Us</h4>
                <p className="text-gray-500">1800-123-4567 (Toll Free)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-accent-light text-accent rounded-2xl h-fit"><MapPin className="h-6 w-6" /></div>
              <div>
                <h4 className="font-bold text-gray-900">Visit Us</h4>
                <p className="text-gray-500">Ministry of Electronics & IT, New Delhi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Subject</label>
              <input type="text" className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border-transparent rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none resize-none" placeholder="Your message here..."></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-light">
              <Send className="h-5 w-5" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
