import React from 'react';
import { FOUNDER_NAME, FOUNDER_FB_URL } from '../constants';
import { Facebook } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Story</h1>
          <p className="text-lg text-gray-600">
            Founded on a passion for music and a commitment to faith, Chankieland Studios has been a cornerstone of the Gaborone music scene.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-24">
          <div className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-amber-500 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1566932769119-7a1fb6d7ce23?q=80&w=2070&auto=format&fit=crop" 
              alt="Earnest Seakgosing" 
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]" 
            />
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Meet the Founder</h2>
            <h3 className="text-xl text-amber-600 font-medium mb-6">{FOUNDER_NAME}</h3>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Earnest Seakgosing is a visionary sound engineer and music producer with a heart for nurturing talent. With years of experience in the music industry, Earnest established Chankieland as a space where technical excellence meets creative freedom.
              </p>
              <p className="mb-4">
                As a recording artist himself, he understands the vulnerability of the creative process. His approach is patient, encouraging, and deeply rooted in his faith, ensuring that every artist feels valued and heard.
              </p>
              <p>
                Under his leadership, Chankieland has grown from a humble recording setup to a full-service production house, serving both gospel ministries and secular artists with equal dedication.
              </p>
            </div>
            <a 
              href={FOUNDER_FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-amber-500 hover:text-amber-600 transition-colors pb-1"
            >
              <Facebook size={18} />
              <span>Connect with Earnest</span>
            </a>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To provide a professional, inspiring environment where artists can realize their full potential. We strive to produce audio of the highest quality while mentoring the next generation of musical talent in Botswana.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Faith Foundation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a studio founded on Baptist faith principles, we value integrity, excellence, and service. We believe that creativity is a gift, and we steward that gift by serving our community with honesty and grace. While our foundation is Christian, we warmly welcome artists from all backgrounds and genres.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;