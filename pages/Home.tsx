import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Music, Mic, Award, PlayCircle, ExternalLink, Quote } from 'lucide-react';
import { AMAZON_ALBUM_URL, TESTIMONIALS } from '../constants';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
            alt="Studio Mixing Console" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Where Sound <br/>
            <span className="text-amber-500">Meets Soul.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-light">
            Botswana's premier music production destination. Professional recording, mixing, and mentoring rooted in excellence and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="/booking" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50 flex items-center justify-center gap-2"
            >
              Book a Session <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Album Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12 order-2 md:order-1">
                <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                  Featured Release
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                  Experience the Sound of Earnest Seakgosing
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover the heart behind the studio. Listen to the latest album by our founder, showcasing the production quality and musical depth you can expect at Chankieland.
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href={AMAZON_ALBUM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors shadow-md"
                  >
                    <PlayCircle size={20} className="text-amber-500" />
                    <span>Listen on Amazon</span>
                    <ExternalLink size={14} className="opacity-50 ml-1" />
                  </a>
                </div>
              </div>
              <div className="h-64 md:h-full relative bg-slate-200 order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Album Cover Placeholder" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro/Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Why Choose Chankieland?</h2>
            <p className="text-gray-600">
              We combine state-of-the-art technology with a warm, faith-based environment to bring out the best in every artist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <Mic className="text-amber-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Audio</h3>
              <p className="text-gray-600">
                Top-tier microphones, preamps, and acoustic treatment ensure your recordings meet global industry standards.
              </p>
            </div>
            
            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <Music className="text-amber-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Creative Vision</h3>
              <p className="text-gray-600">
                Our producers don't just record; we partner with you to refine your arrangements and sonic identity.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow border border-slate-100 group">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <Award className="text-amber-600 w-7 h-7 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Artist Mentoring</h3>
              <p className="text-gray-600">
                Dedicated programs to guide upcoming gospel and secular artists through the music industry landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Snippet */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
           <Quote size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Artists Say</h2>
              <p className="text-gray-400 max-w-xl">
                We're honored to have worked with some of Botswana's finest talent.
              </p>
            </div>
            <Link to="/about" className="hidden md:block text-amber-500 hover:text-amber-400 font-medium mt-4 md:mt-0">
              Read our story &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/50" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-amber-500 text-xs uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;