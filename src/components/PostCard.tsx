/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Share2, MoreHorizontal, Check, Eye, ExternalLink } from 'lucide-react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export default function PostCard({ post, onClick }: PostCardProps) {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/?post=${post.id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTypeIcon = () => {
    switch (post.type) {
      case 'image':
        return <i className="fa-regular fa-image"></i>;
      case 'video':
        return <i className="fa-solid fa-video"></i>;
      case 'audio':
        return <i className="fa-solid fa-headphones"></i>;
      default:
        return null;
    }
  };

  return (
    <article 
      onClick={onClick}
      className="bg-white border border-[#ebebeb] rounded-[18px] overflow-hidden flex flex-col justify-between group hover:shadow-lg hover:border-slate-200 transition-all duration-300 cursor-pointer h-full"
    >
      <div>
        {/* Post Image Area */}
        <div className="relative h-56 sm:h-60 w-full overflow-hidden rounded-t-[18px]">
          <img
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={post.image}
            referrerPolicy="no-referrer"
          />
          {/* Category Badge */}
          <span className="absolute top-4 left-4 bg-[#fe4f70] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm hover:bg-[#e03e5e] transition-colors">
            {post.category}
          </span>
          {/* Post Type icon (Floating bottom right) */}
          {getTypeIcon() && (
            <span className="absolute bottom-4 right-4 w-8 h-8 bg-[#fe4f70] text-white rounded-full flex items-center justify-center text-xs shadow-md shadow-[#fe4f70]/20">
              {getTypeIcon()}
            </span>
          )}
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 pb-2">
          {/* Author Metadata */}
          <div className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
            <img
              alt={post.author.name}
              className="w-5 h-5 rounded-full object-cover"
              src={post.author.avatar}
              referrerPolicy="no-referrer"
            />
            <span className="font-semibold text-[#203656]">{post.author.name}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          {/* Title */}
          <h2 className="text-[16px] sm:text-[18px] font-bold text-[#203656] group-hover:text-[#fe4f70] leading-snug transition-colors mb-2.5">
            {post.title}
          </h2>

          {/* Snippet */}
          <p className="text-xs text-[#707a8a] leading-relaxed font-normal mb-3">
            {post.snippet}
          </p>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 sm:px-6 py-4 mt-2 border-t border-[#ebebeb]/60 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center space-x-1 text-gray-400 font-medium">
          <Eye className="w-3.5 h-3.5 text-gray-400" />
          <span>{post.views} views</span>
        </div>
        <div className="flex items-center space-x-3 relative">
          {copied && (
            <span className="absolute -top-8 right-0 bg-[#203656] text-white text-[10px] px-2 py-1 rounded-md shadow animate-fade-in whitespace-nowrap">
              Link copied!
            </span>
          )}
          <button
            onClick={handleShareClick}
            className="hover:text-[#fe4f70] transition-colors p-1 hover:bg-slate-50 rounded-full"
            title="Copy link"
            id={`share-btn-${post.id}`}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="hover:text-[#fe4f70] transition-colors p-1 hover:bg-slate-50 rounded-full"
            title="Read full article"
            id={`details-btn-${post.id}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
