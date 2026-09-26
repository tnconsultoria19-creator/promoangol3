/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Check, Eye, HelpCircle, FileText, Image as ImageIcon } from 'lucide-react';
import { Post } from '../types';

interface CreatePostModalProps {
  onClose: () => void;
  onSave: (post: Omit<Post, 'id' | 'views' | 'date'>) => void;
}

const PRESET_IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg7Ugufwjck4hgZodzmRVqD5mAVsy1bk11KSydzVF0fGILd4MnEfkSfBchHuuv3VpTeQonWtMaQW0FOanm-hHdW5qBpIe3Oq8n6PD6MMoyztV3P5kPA4IG2EvQkMppaBO1J4WfVgRLqgyGM1-qQsriUqrHVUbt7fcDMptGfDuJ6cxxkd6jOKZd27N1n3CSEgSDLHGW31VnNT5CKmSWXOmNpZ3b9-eQeeFUz4GxL17oXFfhIckcFrIT',
    label: 'Modern Architecture'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiYZUFqiiXmiV1_d_hEdu_FbxKH5qItOXEHyC589shO0okuObf9C72B0DgKiDQwXSnqAk_TnnoYweSVzSUUS-p8aFG1IyLr2kUEUjallER6HujGoUe7IY6C7KdrrirPG2dASq6avYF_O8QZjAjac_RfYhVct8PnTs_FS0-qhBu0qjOnKTZHx1W3J09Q0Fdfi-1VRh52pFhUfDSrOHGcKL7J_Z6n26Uqnb1mPJ-JlLQV8kSYifBTPre',
    label: 'Lake Swim / Nature'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsyivG7-9BFgtKYPjKPVG04WIQKPLx346oNJpSu7cEgXmzAJWUBjWUAjRwVJ8rD0JHgMH47oGdrMQsdUQZMBDpkvlPkbbLrlGmO7PBh7ITXMB_1mU1IiX_G2b_OalRRVHgSwi1hJi0CydvktYg0L1YLfAiQqnJG7Kf6Ens5mdJ-UDugjxTQLK4HdYaNJ2ZWWjLiIHVqlO9VjSZVSvgw8OyyWbHAfL_JF77p3cMuJG4WfY7mGYvPIV6',
    label: 'Modern Lifestyle / Man'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxjGkXGkDIS6h_KaSW6vIcBVpl3-VAUW-pIIwsLNx9kBDHzDiQqhUK0bdt8PWYEaAEcswTxl32MTbaZJalMOLYy44jaUI0c3JW1f3lZ0gFSovIXMQN_7mCbikO5c_Ap36JeqC-ivsiOfEX2jq8FhO3oK-y4u9aQbsSqYWMyGaNkNm1USaZeU_FzSMxLi6buSUBTbTuZvEfzbxs37Wd1rVovMmw59Som77PFqNvvfyp02vY_3yTwxeb',
    label: 'Portrait Photography / Smile'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOf5osk1Jd3QImNx22ildyblqjg3hFg_ILgKRbF5U6aoXjgffLE9TTfBOa5faI-pdNqtluULLKcIHkALXz7kPBqEyXtSb8FYlk2z9osVxZxamRBhfS1Bz54NU50dVvnAy1FN2faHz4R82Ja-zGXCr32oVpca8kDT2nCEplMChP7CQszdUIz0d4P_QQNZ9fK90V490x6VmiKtTyTxDNQCAj4NHEhJsoijbuWpBo9dd_IlhXRE-wr5sM',
    label: 'Minimalist Interior / Chair'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvHR0_5P2EPYme5nMp2xfZnouJPB0C4-r35Ev2GcxxmGba5Kb4W_2_8gHDYD-kNvKqzE-bRjBkjPX-5pejMtXZ9lmpxEavo9vL7cnWvRfd_LYn9-SBS1f92vX4EtDjyU14bb1UB57a1J7Dg6Ivuk8ARQCO6Me1YfLoncdSXc9yvTdTKmC010pn6uNvvcXdJhkmUkpTUqethMnd3yoREWDYrp1-66Qx24v9YD4CYctnb2iFj4NntSN0',
    label: 'Alpine Snowy Mountains'
  }
];

export default function CreatePostModal({ onClose, onSave }: CreatePostModalProps) {
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [category, setCategory] = useState('Lifestyle');
  const [snippet, setSnippet] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(PRESET_IMAGES[0].url);
  const [customImage, setCustomImage] = useState('');
  const [useCustomImage, setUseCustomImage] = useState(false);
  const [postType, setPostType] = useState<'image' | 'video' | 'audio' | 'standard'>('standard');

  const categories = ['Lifestyle', 'Inspiration', 'Fashion', 'Politic', 'Trending', 'Culture', 'How To'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && authorName.trim() && snippet.trim() && content.trim()) {
      const finalImage = useCustomImage && customImage.trim() ? customImage.trim() : selectedImage;
      onSave({
        title: title.trim(),
        image: finalImage,
        category,
        author: {
          name: authorName.trim(),
          avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaGSwc4vrZIapu1Ehr6j6UknXDW7KXGsmAfnznPMojicFqrTghWxwwY_hkxHPTWlfhcx9qcCMuz3VrvclhXX3b1_v0k9kboAo32GYtOv3L-9BHVSFOjjU-RkInF1eE37_0xULqHO1Nf5_e1y1uC_X61Yp9Tw40Vgndu8SbKBKCdqAiQCPi8LB-3xKbyxnag3oPeRtLkgOBGutZiM5ShBRIe5mK18VryKZNPvkha-4h2aQQqh9m-PTh'
        },
        snippet: snippet.trim(),
        content: content.trim(),
        type: postType
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-[#fbfbfb] w-full max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-scale-up" id="create-post-modal">
        {/* Header */}
        <div className="border-b border-[#ebebeb]/60 px-5 sm:px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-[#fe4f70]" />
            <h2 className="text-base sm:text-lg font-extrabold text-[#203656]">Create New Article</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#fff0f3] text-[#707a8a] hover:text-[#fe4f70] flex items-center justify-center transition-colors cursor-pointer"
            id="btn-close-create-post"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold text-[#203656] uppercase tracking-wider">Your Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Liam Sterling"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="bg-white border border-[#ebebeb] text-xs rounded-xl px-4 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none shadow-3xs"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label className="text-xs font-bold text-[#203656] uppercase tracking-wider">Article Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-white border border-[#ebebeb] text-xs rounded-xl px-4 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none shadow-3xs"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Title */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold text-[#203656] uppercase tracking-wider">Article Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. 5 Game-Changing Design Principles To Practice Daily"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white border border-[#ebebeb] text-xs rounded-xl px-4 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none shadow-3xs"
            />
          </div>

          {/* Article Type */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold text-[#203656] uppercase tracking-wider">Post Format</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { type: 'standard', label: 'Standard Text' },
                { type: 'image', label: 'Image-heavy' },
                { type: 'video', label: 'Video Insight' },
                { type: 'audio', label: 'Audio Podcast' },
              ].map((fmt) => (
                <button
                  key={fmt.type}
                  type="button"
                  onClick={() => setPostType(fmt.type as any)}
                  className={`text-xs font-bold py-2 px-3 rounded-lg border text-center transition-all cursor-pointer ${
                    postType === fmt.type
                      ? 'bg-[#fe4f70] border-[#fe4f70] text-white shadow-sm'
                      : 'bg-white border-[#ebebeb] text-[#707a8a] hover:bg-slate-50'
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preset Images Selection */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#203656] uppercase tracking-wider">Cover Image Selection</label>
              <button
                type="button"
                onClick={() => setUseCustomImage(!useCustomImage)}
                className="text-[11px] text-[#fe4f70] hover:underline font-semibold"
              >
                {useCustomImage ? 'Use Presets Instead' : 'Enter Custom Image URL'}
              </button>
            </div>

            {useCustomImage ? (
              <input
                type="url"
                placeholder="https://images.unsplash.com/photo-..."
                value={customImage}
                onChange={(e) => setCustomImage(e.target.value)}
                className="bg-white border border-[#ebebeb] text-xs rounded-xl px-4 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none shadow-3xs"
              />
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRESET_IMAGES.map((img) => (
                  <button
                    key={img.url}
                    type="button"
                    onClick={() => setSelectedImage(img.url)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedImage === img.url ? 'border-[#fe4f70] scale-[0.98]' : 'border-transparent opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img alt={img.label} className="w-full h-full object-cover" src={img.url} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-1.5">
                      <span className="text-[9px] text-white font-bold leading-tight line-clamp-1">{img.label}</span>
                    </div>
                    {selectedImage === img.url && (
                      <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#fe4f70] text-white flex items-center justify-center text-[9px] font-bold">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Snippet / Subtitle */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold text-[#203656] uppercase tracking-wider">Brief Intro Snippet *</label>
            <input
              type="text"
              required
              maxLength={120}
              placeholder="e.g. Dive deep into the absolute core mechanics of architectural sketching and design rhythm..."
              value={snippet}
              onChange={(e) => setSnippet(e.target.value)}
              className="bg-white border border-[#ebebeb] text-xs rounded-xl px-4 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none shadow-3xs"
            />
            <p className="text-[10px] text-gray-400 self-end">Max 120 characters</p>
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-xs font-bold text-[#203656] uppercase tracking-wider">Full Content *</label>
            <textarea
              required
              rows={6}
              placeholder="Start writing your article... (Use double enter to separate paragraphs)"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-white border border-[#ebebeb] text-xs rounded-xl px-4 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none resize-none shadow-3xs"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-[#ebebeb]/60 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-slate-100 hover:bg-slate-200 text-[#203656] text-xs font-bold px-4 py-2.5 rounded-lg transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#fe4f70] hover:bg-[#e03e5e] text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-[#fe4f70]/20 flex items-center space-x-1.5 cursor-pointer"
              id="submit-article-btn"
            >
              <span>Publish Article</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
