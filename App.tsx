import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Music2, MapPin, Phone, Mail, Cross } from 'lucide-react';
import { FOUNDER_NAME, STUDIO_NAME, WHATSAPP_NUMBER } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Mentoring from './pages/Mentoring';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Mentoring', path: '/mentoring' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Music2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wide">
                CHANKIELAND
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
                  location.pathname === link.path ? 'text-amber-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-amber-900/50 text-sm"
            >
              Book Session
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-slate-900 text-amber-500'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-md font-bold"
            >
              Book Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-serif font-bold">{STUDIO_NAME}</h3>
            <p className="text-sm leading-relaxed">
              A premier music production studio in Gaborone, dedicated to excellence in sound and fostering artistic growth.
            </p>
            <div className="flex items-center gap-2 text-amber-600/80 mt-2">
              <Cross size={16} />
              <span className="text-xs italic tracking-wider">Faithfully Serving Since 2008</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Services</Link></li>
              <li><Link to="/mentoring" className="hover:text-amber-500 transition-colors">Mentoring Program</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-500 transition-colors">Studio Gallery</Link></li>
              <li><Link to="/booking" className="hover:text-amber-500 transition-colors">Book a Session</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Gaborone, Botswana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+267 72 481 663</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@chankieland.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/chankieland/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} {STUDIO_NAME}. All rights reserved.</p>
          <p className="mt-2 md:mt-0 opacity-60">Designed with excellence. Inspired by faith.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppWidget = () => {
  const message = encodeURIComponent("Hello! I'm interested in booking a session at Chankieland Studios.");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <Phone className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mentoring" element={<Mentoring />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;