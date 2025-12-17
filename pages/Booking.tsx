import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for booking with Chankieland Studios. We have received your request and will contact you shortly to confirm your session.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-amber-600 font-medium hover:text-amber-700 underline"
          >
            Book another session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Book a Session</h1>
          <p className="text-gray-600">
            Tell us about your project and preferred time. We'll get back to you with a quote and confirmation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-slate-900 via-amber-600 to-slate-900"></div>
          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input required type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
                <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white">
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input type="date" id="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details / Message</label>
              <textarea required id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" placeholder="Tell us about your genre, number of tracks, or specific needs..."></textarea>
            </div>

            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-md transition-colors text-lg">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;