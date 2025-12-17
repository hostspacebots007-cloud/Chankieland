import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User } from 'lucide-react';
import { FOUNDER_NAME } from '../constants';

const Blog = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">News & Insights</h1>
          <p className="text-gray-600">Latest updates from the studio, production tips, and artist spotlights.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-semibold">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-amber-600 cursor-pointer">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <div className="bg-slate-200 p-1 rounded-full">
                    <User size={12} />
                  </div>
                  By {FOUNDER_NAME}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;