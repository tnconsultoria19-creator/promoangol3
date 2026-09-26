/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, Menu, X, Plus, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCreatePostClick: () => void;
}

export default function Header({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onCreatePostClick,
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Lifestyle', 'Inspiration', 'Fashion', 'Trending', 'Culture', 'How To'];

  return (
    <header className="w-full bg-white border-b border-[#ebebeb]/60 sticky top-0 z-40 transition-shadow hover:shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left: Social Icons */}
          <div className="hidden md:flex items-center space-x-4 text-xs text-[#203656]">
            <a href="#facebook" className="hover:text-[#fe4f70] transition-colors" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#twitter" className="hover:text-[#fe4f70] transition-colors" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#instagram" className="hover:text-[#fe4f70] transition-colors" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#pinterest" className="hover:text-[#fe4f70] transition-colors" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest-p"></i>
            </a>
            <a href="#medium" className="hover:text-[#fe4f70] transition-colors" aria-label="Medium">
              <i className="fa-brands fa-medium"></i>
            </a>
            <a href="#youtube" className="hover:text-[#fe4f70] transition-colors" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          {/* Center: Logo, Avatar & Title */}
          <div className="flex flex-col items-center justify-center flex-1 md:flex-initial">
            <div className="flex items-center space-x-3 mb-1">
              {/* Circular author avatar */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden p-0.5 border-2 border-[#fe4f70] hover:scale-105 transition-transform duration-300">
                <img
                  alt="Katen Avatar"
                  className="w-full h-full object-cover rounded-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVlNVXxdNmPTuUYkyEBWDnDRauicIDMd1LkcLvSRilgbbex3vLUDxCw-GVnNU09uXJ4csEjTAFmfBdKqIon9RhM1d-QsVVArW6yYJBiz1uZS9kNo2r58Ftjrz1WIlQtsWB1odP3iUOpYVcaSucG5xlKBAgzN_jyAekg3MgcKe75SCwruB4Y2mmLHoyl6Hyb49oifVfsk6ehkC-hLT3MrBDV_pMomv0SVf7utf4tKDnNvLgz6GvZ-kh"
                />
              </div>
              <a href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#203656] flex items-baseline">
                Katen<span className="text-[#fe4f70] text-3xl sm:text-4xl leading-none">.</span>
              </a>
            </div>
            <span className="text-[9px] sm:text-[11px] text-[#707a8a] font-semibold tracking-wider uppercase mt-0.5 text-center">
              Professional Writer &amp; Personal Blogger
            </span>
          </div>

          {/* Right: Write Button, Search & Mobile Nav Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Create Post Premium Pill */}
            <button
              onClick={onCreatePostClick}
              className="flex items-center space-x-1.5 bg-gradient-to-r from-[#fe4f70] to-[#e03e5e] text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-md shadow-[#fe4f70]/20 hover:shadow-lg hover:shadow-[#fe4f70]/30 transition-all cursor-pointer hover:scale-105"
              id="btn-create-post"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Write Post</span>
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                isSearchOpen ? 'bg-[#fff0f3] text-[#fe4f70]' : 'text-[#203656] hover:text-[#fe4f70]'
              }`}
              id="btn-search-toggle"
              aria-label="Toggle Search"
            >
              {isSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-[#fe4f70] text-white flex items-center justify-center shadow-md shadow-[#fe4f70]/20 hover:bg-[#e03e5e] transition-colors cursor-pointer"
              id="btn-mobile-menu"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Search Bar Panel */}
        {isSearchOpen && (
          <div className="mt-4 px-2 py-3 bg-[#fdfdfd] border border-[#ebebeb] rounded-xl flex items-center shadow-inner animate-fade-in">
            <Search className="w-4 h-4 text-[#707a8a] ml-2 mr-3" />
            <input
              type="text"
              placeholder="Search posts, topics, insights..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-transparent text-sm text-[#203656] placeholder-gray-400 border-none outline-none focus:ring-0 focus:outline-none"
              autoFocus
              id="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="text-xs text-gray-400 hover:text-[#fe4f70] px-2 py-1"
                id="clear-search"
              >
                Clear
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Navigation Bar */}
      <nav className="border-t border-[#ebebeb]/40 bg-[#fdfdfd] hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center space-x-2 py-2 text-xs font-semibold uppercase tracking-wider text-[#203656]">
            {navItems.map((item) => {
              const isSelected =
                item === 'Home' ? currentCategory === '' : currentCategory.toLowerCase() === item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => onSelectCategory(item === 'Home' ? '' : item)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#fe4f70] text-white shadow-md shadow-[#fe4f70]/25'
                        : 'hover:text-[#fe4f70] hover:bg-[#fff0f3]/60'
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#ebebeb]/60 bg-white shadow-xl py-4 px-6 animate-slide-down">
          <ul className="space-y-2 text-sm font-semibold uppercase tracking-wider text-[#203656]">
            {navItems.map((item) => {
              const isSelected =
                item === 'Home' ? currentCategory === '' : currentCategory.toLowerCase() === item.toLowerCase();
              return (
                <li key={item}>
                  <button
                    onClick={() => {
                      onSelectCategory(item === 'Home' ? '' : item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                      isSelected ? 'bg-[#fff0f3] text-[#fe4f70]' : 'hover:bg-gray-50'
                    }`}
                  >
                    <span>{item}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#fe4f70]" />}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-6 border-t border-[#ebebeb]/40 flex items-center justify-around text-sm text-[#203656]">
            <a href="#facebook" className="hover:text-[#fe4f70]"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#twitter" className="hover:text-[#fe4f70]"><i className="fa-brands fa-twitter"></i></a>
            <a href="#instagram" className="hover:text-[#fe4f70]"><i className="fa-brands fa-instagram"></i></a>
            <a href="#pinterest" className="hover:text-[#fe4f70]"><i className="fa-brands fa-pinterest-p"></i></a>
          </div>
        </div>
      )}
    </header>
  );
}
