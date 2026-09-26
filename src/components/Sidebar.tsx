/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronRight, ArrowLeft, ArrowRight, Check, Send } from 'lucide-react';
import { Post } from '../types';

interface SidebarProps {
  posts: Post[];
  onSelectCategory: (category: string) => void;
  activeCategory: string;
}

export default function Sidebar({ posts, onSelectCategory, activeCategory }: SidebarProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [celebIndex, setCelebIndex] = useState(0);

  // Categories count
  const categories = ['Lifestyle', 'Inspiration', 'Fashion', 'Politic', 'Trending', 'Culture', 'How To'];
  const getCategoryCount = (category: string) => {
    return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase()).length;
  };

  // Popular posts sorted by views
  const popularPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 3);

  // Celebration Carousel Posts (Posts with type video, image, or specific highlights)
  const celebrationPosts = posts.filter((p) => p.category === 'How To' || p.category === 'Inspiration' || p.category === 'Culture');

  const handleNextCeleb = () => {
    setCelebIndex((prev: number) => (prev + 1) % celebrationPosts.length);
  };

  const handlePrevCeleb = () => {
    setCelebIndex((prev: number) => (prev - 1 + celebrationPosts.length) % celebrationPosts.length);
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const activeCelebPost = celebrationPosts[celebIndex] || posts[0];

  return (
    <aside className="space-y-8 lg:col-span-4" id="sidebar">
      {/* Widget 1: Author Bio */}
      <div className="bg-white border border-[#ebebeb] rounded-[18px] p-6 sm:p-7 text-center relative overflow-hidden group hover:shadow-md transition-all duration-300">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#203656_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>
        <h3 className="text-2xl font-bold text-[#203656] tracking-tight mb-3">
          Katen<span className="text-[#fe4f70]">.</span>
        </h3>
        <p className="text-xs leading-relaxed text-[#707a8a] mb-6">
          Hello, We're content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.
        </p>
        <div className="flex items-center justify-center space-x-4 text-xs text-[#203656]">
          <a href="#facebook" className="hover:text-[#fe4f70] transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#twitter" className="hover:text-[#fe4f70] transition-colors"><i className="fa-brands fa-twitter"></i></a>
          <a href="#instagram" className="hover:text-[#fe4f70] transition-colors"><i className="fa-brands fa-instagram"></i></a>
          <a href="#pinterest" className="hover:text-[#fe4f70] transition-colors"><i className="fa-brands fa-pinterest-p"></i></a>
          <a href="#medium" className="hover:text-[#fe4f70] transition-colors"><i className="fa-brands fa-medium"></i></a>
          <a href="#youtube" className="hover:text-[#fe4f70] transition-colors"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>

      {/* Widget 2: Popular Posts */}
      <div className="bg-white border border-[#ebebeb] rounded-[18px] p-6 group hover:shadow-md transition-all duration-300">
        <div className="text-center mb-6">
          <h4 className="text-base font-bold text-[#203656]">Popular Posts</h4>
          <div className="wave-accent mt-1.5"></div>
        </div>
        <div className="space-y-5">
          {popularPosts.map((post, idx) => (
            <div key={post.id} className="flex items-center space-x-4 group/item cursor-pointer">
              <div className="relative flex-shrink-0">
                <img
                  alt={post.title}
                  className="w-14 h-14 rounded-full object-cover border border-slate-100"
                  src={post.image}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#fe4f70] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  {idx + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-bold text-[#203656] group-hover/item:text-[#fe4f70] transition-colors leading-snug mb-1 line-clamp-2">
                  {post.title}
                </h5>
                <span className="text-[11px] text-gray-400">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget 3: Explore Topics */}
      <div className="bg-white border border-[#ebebeb] rounded-[18px] p-6 group hover:shadow-md transition-all duration-300">
        <div className="text-center mb-6">
          <h4 className="text-base font-bold text-[#203656]">Explore Topics</h4>
          <div className="wave-accent mt-1.5"></div>
        </div>
        <ul className="divide-y divide-[#ebebeb]/60 text-xs font-medium">
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
            return (
              <li key={cat}>
                <button
                  onClick={() => onSelectCategory(cat)}
                  className={`w-full py-3 flex items-center justify-between group/item cursor-pointer transition-colors ${
                    isActive ? 'text-[#fe4f70] font-bold' : 'text-[#203656] hover:text-[#fe4f70]'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <ChevronRight className={`w-3 h-3 text-[#fe4f70] transition-transform group-hover/item:translate-x-1 ${
                      isActive ? 'translate-x-1' : ''
                    }`} />
                    <span>{cat}</span>
                  </div>
                  <span className={`${isActive ? 'text-[#fe4f70]' : 'text-gray-400 group-hover/item:text-[#fe4f70]'} transition-colors`}>({count})</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Widget 4: Newsletter */}
      <div className="bg-white border border-[#ebebeb] rounded-[18px] p-6 text-center group hover:shadow-md transition-all duration-300">
        <div className="mb-4">
          <h4 className="text-base font-bold text-[#203656]">Newsletter</h4>
          <div className="wave-accent mt-1.5"></div>
        </div>
        <p className="text-xs font-bold text-[#203656] mb-4">Join 70,000 subscribers!</p>

        {subscribed ? (
          <div className="py-6 px-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-xs font-semibold flex flex-col items-center animate-fade-in">
            <Check className="w-8 h-8 text-emerald-500 mb-2" />
            <p>Thank you for subscribing!</p>
            <p className="text-[10px] text-emerald-600 font-normal mt-1">Please check your inbox for updates.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribeSubmit} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address..."
              className="w-full text-xs rounded-full border-[#ebebeb] px-4 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] placeholder-gray-400 outline-none"
              id="newsletter-email"
            />
            <button
              type="submit"
              className="w-full bg-[#fe4f70] hover:bg-[#e03e5e] text-white text-xs font-bold py-2.5 rounded-full transition-all shadow-md shadow-[#fe4f70]/20 flex items-center justify-center space-x-2 cursor-pointer"
              id="newsletter-submit"
            >
              <Send className="w-3 h-3" />
              <span>Sign Up</span>
            </button>
          </form>
        )}
        <p className="text-[10px] text-gray-400 mt-3">
          By signing up, you agree to our{' '}
          <a href="#privacy" className="text-[#fe4f70] hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>

      {/* Widget 5: Celebration Carousel Widget */}
      {activeCelebPost && (
        <div className="bg-white border border-[#ebebeb] rounded-[18px] p-6 group hover:shadow-md transition-all duration-300">
          <div className="text-center mb-5">
            <h4 className="text-base font-bold text-[#203656]">Celebration</h4>
            <div className="wave-accent mt-1.5"></div>
          </div>
          <div>
            <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 shadow-sm">
              <img
                alt={activeCelebPost.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={activeCelebPost.image}
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 left-3 bg-[#fe4f70] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                {activeCelebPost.category}
              </span>
            </div>
            <h5 className="text-xs font-bold text-[#203656] hover:text-[#fe4f70] cursor-pointer transition-colors leading-snug mb-1 line-clamp-2">
              {activeCelebPost.title}
            </h5>
            <div className="flex items-center space-x-1.5 text-[11px] text-gray-400 mb-4">
              <span className="text-[#203656] font-semibold">{activeCelebPost.author.name}</span>
              <span>•</span>
              <span>{activeCelebPost.date}</span>
            </div>
            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-center space-x-2">
              <button
                onClick={handlePrevCeleb}
                className="w-6 h-6 rounded-full border border-[#ebebeb] flex items-center justify-center text-[10px] text-gray-400 hover:border-[#fe4f70] hover:text-[#fe4f70] transition-colors cursor-pointer"
                id="btn-celeb-prev"
              >
                <ArrowLeft className="w-3 h-3" />
              </button>
              <button
                onClick={handleNextCeleb}
                className="w-6 h-6 rounded-full border border-[#ebebeb] flex items-center justify-center text-[10px] text-gray-400 hover:border-[#fe4f70] hover:text-[#fe4f70] transition-colors cursor-pointer"
                id="btn-celeb-next"
              >
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Widget 6: Sponsored Ad Banner */}
      <div>
        <span className="text-[10px] tracking-wider text-gray-400 uppercase font-bold block text-center mb-2">
          - SPONSORED AD -
        </span>
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#fe5f7c] to-[#fe4266] text-white shadow-lg overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500" />
          <h3 className="text-xl font-black tracking-tight mb-1">
            Katen <span className="text-white">.</span>
          </h3>
          <p className="text-[11px] text-white/95 font-medium mb-4">
            Minimal Blog &amp; Magazine WordPress Theme
          </p>

          {/* Graphic layout mockup imitation */}
          <div className="grid grid-cols-2 gap-2 bg-white/10 p-2 rounded-xl border border-white/20 backdrop-blur-xs">
            <div className="bg-white rounded p-1.5 space-y-1 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
              <div className="bg-gray-200 h-8 rounded-sm" />
              <div className="bg-gray-100 h-2 w-3/4 rounded-sm" />
              <div className="bg-gray-100 h-1.5 w-1/2 rounded-sm" />
            </div>
            <div className="bg-white rounded p-1.5 space-y-1 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
              <div className="bg-gray-200 h-8 rounded-sm" />
              <div className="bg-gray-100 h-2 w-3/4 rounded-sm" />
              <div className="bg-gray-100 h-1.5 w-1/2 rounded-sm" />
            </div>
            <div className="bg-white rounded p-1.5 space-y-1 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
              <div className="bg-gray-200 h-8 rounded-sm" />
              <div className="bg-gray-100 h-2 w-3/4 rounded-sm" />
              <div className="bg-gray-100 h-1.5 w-1/2 rounded-sm" />
            </div>
            <div className="bg-white rounded p-1.5 space-y-1 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
              <div className="bg-gray-200 h-8 rounded-sm" />
              <div className="bg-gray-100 h-2 w-3/4 rounded-sm" />
              <div className="bg-gray-100 h-1.5 w-1/2 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Widget 7: Tag Clouds */}
      <div className="bg-white border border-[#ebebeb] rounded-[18px] p-6 group hover:shadow-md transition-all duration-300">
        <div className="text-center mb-5">
          <h4 className="text-base font-bold text-[#203656]">Tag Clouds</h4>
          <div className="wave-accent mt-1.5"></div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {['#Trending', '#Video', '#Featured', '#Gallery', '#Celebrities'].map((tag) => {
            const rawCat = tag.replace('#', '');
            let mappedCat = '';
            if (rawCat === 'Video') mappedCat = 'Lifestyle';
            else if (rawCat === 'Trending') mappedCat = 'Trending';
            else if (rawCat === 'Featured') mappedCat = 'Inspiration';
            else mappedCat = '';

            return (
              <button
                key={tag}
                onClick={() => mappedCat && onSelectCategory(mappedCat)}
                className="text-xs px-3.5 py-1.5 rounded-full border border-[#ebebeb] text-[#707a8a] hover:border-[#fe4f70] hover:text-[#fe4f70] hover:bg-[#fff0f3]/40 transition-all cursor-pointer"
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
