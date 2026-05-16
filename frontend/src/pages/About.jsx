import React from 'react';
import { Target, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Empowering Citizens through Awareness</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          GovSchemes is a dedicated platform designed to simplify the complex world of government initiatives. We believe that every citizen should have easy access to the benefits they are entitled to.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {[
          { title: 'Our Mission', icon: Target, text: 'To reach every corner of India and educate citizens about the schemes designed for their welfare.' },
          { title: 'Transparency', icon: Shield, text: 'Providing accurate, up-to-date, and simplified information directly from official government sources.' },
          { title: 'User Centric', icon: Heart, text: 'Designing tools like our eligibility checker to make finding schemes as easy as possible.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="inline-flex p-4 bg-primary-light text-primary rounded-2xl mb-6"><item.icon className="h-8 w-8" /></div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Join our mission to spread awareness</h2>
        <p className="text-primary-light text-xl mb-10 max-w-2xl mx-auto">Whether you are a volunteer, a government official, or a concerned citizen, we value your support.</p>
        <button className="px-10 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors">Get Involved</button>
      </div>
    </div>
  );
};

export default About;
