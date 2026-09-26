/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostCard from './components/PostCard';
import PostDetail from './components/PostDetail';
import CreatePostModal from './components/CreatePostModal';
import InstagramStrip from './components/InstagramStrip';
import Footer from './components/Footer';
import { Post, Comment } from './types';
import { initialPosts, initialComments } from './data';
import { Sparkles, Heart, RefreshCw } from 'lucide-react';

export default function App() {
  const [posts, setPosts] = useState<Post[]>(() => {
    const saved = localStorage.getItem('katen_posts');
    return saved ? JSON.parse(saved) : initialPosts;
  });

  const [comments, setComments] = useState<Record<string, Comment[]>>(() => {
    const saved = localStorage.getItem('katen_comments');
    return saved ? JSON.parse(saved) : initialComments;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Persist state to local storage
  useEffect(() => {
    localStorage.setItem('katen_posts', JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem('katen_comments', JSON.stringify(comments));
  }, [comments]);

  // Handle category / search resets
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // reset to page 1
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // reset to page 1
  };

  // Filter posts dynamically
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Add Comment handler
  const handleAddComment = (postId: string, name: string, text: string) => {
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      authorName: name,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaGSwc4vrZIapu1Ehr6j6UknXDW7KXGsmAfnznPMojicFqrTghWxwwY_hkxHPTWlfhcx9qcCMuz3VrvclhXX3b1_v0k9kboAo32GYtOv3L-9BHVSFOjjU-RkInF1eE37_0xULqHO1Nf5_e1y1uC_X61Yp9Tw40Vgndu8SbKBKCdqAiQCPi8LB-3xKbyxnag3oPeRtLkgOBGutZiM5ShBRIe5mK18VryKZNPvkha-4h2aQQqh9m-PTh',
      content: text,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
    };

    setComments((prev) => {
      const existing = prev[postId] || [];
      return {
        ...prev,
        [postId]: [...existing, newComment],
      };
    });
  };

  // Save Post handler
  const handleCreatePost = (newPostData: Omit<Post, 'id' | 'views' | 'date'>) => {
    const newPost: Post = {
      ...newPostData,
      id: `post-${Date.now()}`,
      views: 120,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
    };

    setPosts((prev) => [newPost, ...prev]);
    setIsCreateModalOpen(false);
    
    // Auto-select and show the newly published article!
    setSelectedPost(newPost);
  };

  // Reset blog database to presets
  const handleResetData = () => {
    if (window.confirm('Do you want to reset the blog to the original 10 mockup articles?')) {
      localStorage.removeItem('katen_posts');
      localStorage.removeItem('katen_comments');
      setPosts(initialPosts);
      setComments(initialComments);
      setSelectedCategory('');
      setSearchQuery('');
      setCurrentPage(1);
    }
  };

  // Related posts helper (same category, excluding the active post)
  const getRelatedPosts = (activePost: Post) => {
    return posts
      .filter((p) => p.category === activePost.category && p.id !== activePost.id)
      .slice(0, 3);
  };

  return (
    <div className="bg-[#fbfbfb] text-[#707a8a] font-sans antialiased min-h-screen flex flex-col selection:bg-[#fe4f70] selection:text-white">
      {/* Header */}
      <Header
        currentCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onCreatePostClick={() => setIsCreateModalOpen(true)}
      />

      {/* Page Title Area (Dynamic Category Hero banner) */}
      <section className="py-10 text-center bg-white border-b border-[#ebebeb]/30 shadow-2xs relative">
        <div className="absolute right-4 top-4">
          <button
            onClick={handleResetData}
            title="Reset to default mock posts"
            className="flex items-center space-x-1 text-[10px] uppercase font-bold text-gray-400 hover:text-[#fe4f70] border border-slate-200 hover:border-[#fe4f70] px-2.5 py-1 rounded-full bg-slate-50 transition-all cursor-pointer"
            id="reset-db-btn"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">Reset Presets</span>
          </button>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#203656] tracking-tight">
          {selectedCategory || 'Lifestyle'}
        </h1>
        <nav className="mt-2 text-xs font-medium text-gray-400 flex items-center justify-center space-x-2">
          <button onClick={() => setSelectedCategory('')} className="hover:text-[#fe4f70] transition-colors cursor-pointer">
            Home
          </button>
          <span>/</span>
          <span className="text-gray-500 font-semibold">{selectedCategory || 'Lifestyle'}</span>
        </nav>
      </section>

      {/* Main Grid Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Feed Section (8 cols) */}
          <section className="lg:col-span-8 space-y-7" id="articles-feed">
            {filteredPosts.length === 0 ? (
              <div className="bg-white border border-[#ebebeb] rounded-[18px] p-12 text-center shadow-xs">
                <Sparkles className="w-12 h-12 text-[#fe4f70] mx-auto mb-4 animate-bounce" />
                <h3 className="text-lg font-bold text-[#203656] mb-1">No Articles Found</h3>
                <p className="text-xs text-[#707a8a] max-w-sm mx-auto">
                  We couldn't find any articles matching your search query. Try typing another term, select a different category, or create your own custom post!
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                  }}
                  className="mt-5 bg-[#fe4f70] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#e03e5e] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                  {currentPosts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onClick={() => setSelectedPost(post)}
                    />
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2 mt-12 py-4" id="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => {
                          setCurrentPage(pageNumber);
                          window.scrollTo({ top: 200, behavior: 'smooth' });
                        }}
                        className={`w-9 h-9 rounded-full text-xs font-bold flex items-center justify-center cursor-pointer border transition-all ${
                          currentPage === pageNumber
                            ? 'bg-[#fe4f70] border-[#fe4f70] text-white shadow-md shadow-[#fe4f70]/25'
                            : 'bg-white border-[#ebebeb] text-[#203656] hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>

          {/* Right Sidebar Section (4 cols) */}
          <Sidebar
            posts={posts}
            onSelectCategory={handleSelectCategory}
            activeCategory={selectedCategory}
          />

        </div>
      </main>

      {/* Instagram Horizontal Banner Grid */}
      <InstagramStrip />

      {/* Footer */}
      <Footer />

      {/* Details Modal overlay */}
      {selectedPost && (
        <PostDetail
          post={selectedPost}
          comments={comments[selectedPost.id] || []}
          onAddComment={handleAddComment}
          onClose={() => setSelectedPost(null)}
          relatedPosts={getRelatedPosts(selectedPost)}
          onSelectPost={(p) => setSelectedPost(p)}
        />
      )}

      {/* Publish Custom Post Modal */}
      {isCreateModalOpen && (
        <CreatePostModal
          onClose={() => setIsCreateModalOpen(false)}
          onSave={handleCreatePost}
        />
      )}
    </div>
  );
}
