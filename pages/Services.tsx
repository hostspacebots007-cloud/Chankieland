import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the first note to the final master, we provide comprehensive audio solutions tailored to your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <Link 
                    to={service.id === 'mentoring' ? '/mentoring' : '/contact'} 
                    className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    {service.id === 'mentoring' ? 'Learn More' : 'Request Quote'} 
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to create something amazing?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Whether you have a fully formed project or just an idea, we are here to help you bring it to life.
            </p>
            <Link 
              to="/booking" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-amber-900/50 transition-transform hover:scale-105"
            >
              Book Your Session Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;