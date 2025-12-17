import React from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621619623880-36b1356a4216?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop",
];

const Gallery = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Studio Gallery</h1>
          <p className="text-gray-600">A glimpse into our creative space and the equipment we use to craft your sound.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {IMAGES.map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square">
              <img 
                src={src} 
                alt={`Studio Shot ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-medium border border-white px-4 py-2 rounded-full">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;