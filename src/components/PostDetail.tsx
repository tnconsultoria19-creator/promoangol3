/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Calendar, User, Eye, ArrowLeft, MessageSquare, Send, Share2, ThumbsUp } from 'lucide-react';
import { Post, Comment } from '../types';

interface PostDetailProps {
  post: Post;
  comments: Comment[];
  onAddComment: (postId: string, name: string, text: string) => void;
  onClose: () => void;
  relatedPosts: Post[];
  onSelectPost: (post: Post) => void;
}

export default function PostDetail({
  post,
  comments,
  onAddComment,
  onClose,
  relatedPosts,
  onSelectPost,
}: PostDetailProps) {
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [likes, setLikes] = useState(Math.floor(post.views / 15) + 32);
  const [hasLiked, setHasLiked] = useState(false);
  const [readFocusMode, setReadFocusMode] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && commentText.trim()) {
      onAddComment(post.id, name.trim(), commentText.trim());
      setName('');
      setCommentText('');
    }
  };

  const handleLikeClick = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className={`bg-[#fbfbfb] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 flex flex-col ${
          readFocusMode ? 'max-w-3xl h-[95vh]' : 'max-w-5xl h-[90vh]'
        }`}
        id={`post-detail-modal-${post.id}`}
      >
        {/* Modal Top Sticky Bar */}
        <div className="sticky top-0 bg-white border-b border-[#ebebeb]/60 px-5 sm:px-6 py-4 flex items-center justify-between z-10">
          <button
            onClick={onClose}
            className="flex items-center space-x-1.5 text-xs text-[#707a8a] hover:text-[#fe4f70] font-semibold transition-colors cursor-pointer group"
            id="btn-back-to-feed"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Feed</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setReadFocusMode(!readFocusMode)}
              className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
                readFocusMode 
                  ? 'bg-[#fe4f70] text-white shadow-sm' 
                  : 'bg-slate-100 text-[#203656] hover:bg-slate-200'
              }`}
              id="btn-focus-mode"
              title="Toggle reading focus layout"
            >
              {readFocusMode ? 'Exit Focus View' : 'Focus Mode'}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#fff0f3] text-[#707a8a] hover:text-[#fe4f70] flex items-center justify-center transition-colors cursor-pointer"
              id="btn-close-modal"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto">
          {/* Main Hero Header (only visible when NOT in extreme focus mode) */}
          {!readFocusMode && (
            <div className="relative h-64 sm:h-96 w-full">
              <img
                alt={post.title}
                className="w-full h-full object-cover"
                src={post.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
                <span className="self-start bg-[#fe4f70] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md mb-3 uppercase tracking-wider">
                  {post.category}
                </span>
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-4xl tracking-tight mb-4">
                  {post.title}
                </h1>
                
                {/* Metadata in Hero */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <img
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full object-cover border border-white/20"
                      src={post.author.avatar}
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-semibold text-white">{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Core Article Layout */}
          <div className="max-w-4xl mx-auto px-5 sm:px-10 py-8">
            {readFocusMode && (
              <div className="mb-6">
                <span className="text-[#fe4f70] text-xs font-bold uppercase tracking-wider block mb-1">
                  {post.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-[#203656] tracking-tight leading-snug mb-3">
                  {post.title}
                </h1>
                <div className="text-xs text-gray-400 flex items-center space-x-4">
                  <span>By {post.author.name}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <hr className="border-slate-200 my-4" />
              </div>
            )}

            {/* Markdown Body text style */}
            <div className="prose max-w-none text-[#203656] text-sm sm:text-[15px] leading-relaxed space-y-6 font-normal">
              {post.content.split('\n\n').map((para, idx) => (
                <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-[#fe4f70] first-letter:mr-1 first-letter:float-left first-of-type:clear-both">
                  {para}
                </p>
              ))}
            </div>

            {/* Post Interactions */}
            <div className="flex items-center justify-between border-y border-[#ebebeb] py-4 my-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLikeClick}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    hasLiked
                      ? 'bg-rose-50 text-[#fe4f70] border border-rose-200'
                      : 'bg-slate-50 text-[#203656] border border-slate-100 hover:bg-slate-100'
                  }`}
                  id="btn-like-post"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? 'fill-current' : ''}`} />
                  <span>{likes} Likes</span>
                </button>
                <div className="text-xs text-gray-400 flex items-center space-x-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{comments.length} Comments</span>
                </div>
              </div>

              {/* Share */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Post URL copied to clipboard!');
                }}
                className="flex items-center space-x-1.5 text-xs text-[#707a8a] hover:text-[#fe4f70] font-semibold transition-colors p-2 rounded-full hover:bg-slate-50"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Share post</span>
              </button>
            </div>

            {/* Related Articles Section (only visible if NOT in focus view) */}
            {!readFocusMode && relatedPosts.length > 0 && (
              <div className="mb-10">
                <h3 className="text-base font-extrabold text-[#203656] mb-4">Related Articles</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((rPost) => (
                    <div
                      key={rPost.id}
                      onClick={() => onSelectPost(rPost)}
                      className="bg-white border border-[#ebebeb] rounded-xl p-3 cursor-pointer group flex flex-col justify-between"
                    >
                      <div className="relative h-28 w-full overflow-hidden rounded-lg mb-2">
                        <img
                          alt={rPost.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src={rPost.image}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="text-[11px] font-bold text-[#203656] group-hover:text-[#fe4f70] transition-colors leading-tight line-clamp-2">
                        {rPost.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comments List Section */}
            <div className="space-y-6">
              <h3 className="text-base font-extrabold text-[#203656] flex items-center space-x-2">
                <span>Comments</span>
                <span className="bg-[#fff0f3] text-[#fe4f70] text-xs px-2.5 py-0.5 rounded-full font-bold">
                  {comments.length}
                </span>
              </h3>

              {comments.length === 0 ? (
                <p className="text-xs text-gray-400 italic">No comments yet. Be the first to leave a thought!</p>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-white border border-[#ebebeb] p-4 rounded-xl flex items-start space-x-3 shadow-2xs hover:shadow-xs transition-all">
                      <img
                        alt={comment.authorName}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                        src={comment.avatar}
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-bold text-[#203656]">{comment.authorName}</h4>
                          <span className="text-[10px] text-gray-400">{comment.date}</span>
                        </div>
                        <p className="text-xs text-[#707a8a] leading-relaxed">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Comment Form */}
              <div className="bg-slate-50 border border-[#ebebeb] rounded-xl p-5 mt-6">
                <h4 className="text-xs font-bold text-[#203656] uppercase tracking-wider mb-3">Leave a Reply</h4>
                <form onSubmit={handleSubmitComment} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white border border-[#ebebeb] text-xs rounded-lg px-3 py-2 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none"
                    />
                  </div>
                  <textarea
                    required
                    rows={3}
                    placeholder="Join the conversation... *"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full bg-white border border-[#ebebeb] text-xs rounded-lg px-3 py-2.5 focus:border-[#fe4f70] focus:ring-1 focus:ring-[#fe4f70] text-[#203656] outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#fe4f70] hover:bg-[#e03e5e] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm flex items-center space-x-1.5 cursor-pointer ml-auto"
                  >
                    <Send className="w-3 h-3" />
                    <span>Submit Comment</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
