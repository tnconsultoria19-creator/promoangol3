/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-[#ebebeb]/60 py-6 sm:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#707a8a]">
          {/* Left: Copyright */}
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Katen. Interactive Design Template by{' '}
            <span className="text-[#203656] font-bold">ThemeGer</span> &amp; AI Studio.
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center space-x-5 text-sm text-[#203656]">
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

          {/* Right: Back to Top */}
          <div>
            <button
              onClick={handleScrollToTop}
              className="flex items-center space-x-1.5 text-xs text-[#707a8a] hover:text-[#fe4f70] font-bold transition-all focus:outline-none cursor-pointer hover:-translate-y-0.5 group"
              id="btn-scroll-top"
            >
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
