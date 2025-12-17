import React from 'react';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { FACEBOOK_URL } from '../constants';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-300">We'd love to hear from you. Here's how you can reach us.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <MapPin className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    Gaborone, Botswana<br />
                    (Central Business District Area)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Phone className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+267 72 481 663</p>
                  <p className="text-gray-500 text-sm mt-1">Mon - Sat: 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Mail className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">info@chankieland.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-lg">
                  <Facebook className="text-amber-600 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Follow Us</h3>
                  <a href={FACEBOOK_URL} className="text-amber-600 hover:text-amber-700 font-medium underline">
                    facebook.com/chankieland
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-100 rounded-2xl overflow-hidden h-96 md:h-auto min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115467.56834543467!2d25.8502058448897!3d-24.65824962295982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5db5b538b4329%3A0x6e9a7e6d0426c7e2!2sGaborone%2C%20Botswana!5e0!3m2!1sen!2sus!4v1709848293012!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Gaborone Map"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;