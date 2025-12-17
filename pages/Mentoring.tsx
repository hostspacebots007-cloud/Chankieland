import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Star, Mic2 } from 'lucide-react';

const Mentoring = () => {
  return (
    <div className="py-12">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Artist Mentoring Program</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering the next generation of musical talent. We provide guidance, technical training, and industry insights for both gospel and secular artists.
            </p>
            <Link to="/contact" className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition-colors">
              Apply Now
            </Link>
          </div>
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/10">
            <img 
              src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop" 
              alt="Mentoring Session" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* For Whom */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Who Is This For?</h2>
          <p className="text-gray-600 mb-10">
            Our program is designed for dedicated individuals who want to take their music career seriously. We believe talent is universal, which is why our doors are open to:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex-1 bg-amber-50 p-6 rounded-xl border border-amber-100">
              <h3 className="font-bold text-xl text-amber-800 mb-2">Gospel Artists</h3>
              <p className="text-sm text-gray-600">Refine your ministry, improve your vocal technique, and learn how to navigate the gospel industry with integrity.</p>
            </div>
            <div className="flex-1 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-xl text-slate-800 mb-2">Secular Artists</h3>
              <p className="text-sm text-gray-600">Develop your unique brand, understand production mechanics, and prepare for commercial release.</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Program Benefits</h2>
            <div className="space-y-6">
              {[
                "One-on-one coaching with Earnest Seakgosing",
                "Studio time and technical training on equipment",
                "Songwriting and arrangement workshops",
                "Music business basics (copyright, distribution, marketing)",
                "Performance coaching and stage presence",
                "Networking opportunities with industry professionals"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <CheckCircle className="text-green-600 w-5 h-5" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <Mic2 className="w-10 h-10 text-amber-600 mb-4" />
              <h4 className="font-bold">Vocal Training</h4>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <Users className="w-10 h-10 text-amber-600 mb-4" />
              <h4 className="font-bold">Networking</h4>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <Star className="w-10 h-10 text-amber-600 mb-4" />
              <h4 className="font-bold">Branding</h4>
            </div>
            <div className="bg-amber-600 text-white p-6 rounded-2xl flex flex-col items-center justify-center text-center">
              <h4 className="font-bold text-lg">Apply Today</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mentoring;