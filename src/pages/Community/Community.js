// src/pages/Community/Community.js

import React, { useState } from 'react';
import './Community.css';
import { PenLine, Search, ThumbsUp, MessageCircle } from 'lucide-react';

export default function Community() {
  console.log("Community component is rendering");  // 확인용 로그

  const [activeTab, setActiveTab] = useState('all');

  const posts = [
    { id: 1, title: 'Example Post', author: 'Admin', date: '2024-10-28', views: 121, likes: 10, isNotice: true, isPinned: true },
    { id: 2, title: 'Another Post', author: 'User', date: '2024-10-29', views: 50, likes: 5 },
  ];

  return (
    <div className="community-container">
      {/* Top Navigation */}
      <div className="top-navigation">
        <div className="tabs">
          <button className={`tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All</button>
          <button className={`tab ${activeTab === 'popular' ? 'active' : ''}`} onClick={() => setActiveTab('popular')}>Popular</button>
          <button className={`tab ${activeTab === 'notice' ? 'active' : ''}`} onClick={() => setActiveTab('notice')}>Notices</button>
        </div>
        <div className="controls">
          <select className="select">
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <button className="write-button">
            <PenLine className="icon" /> Write
          </button>
        </div>
      </div>
      
      <div className="posts-table">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">No</th>
              <th className="table-header">Title</th>
              <th className="table-header">Author</th>
              <th className="table-header">Date</th>
              <th className="table-header">Views</th>
              <th className="table-header">Likes</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className={`table-row ${post.isPinned ? 'pinned' : ''}`}>
                <td className="table-cell">{post.isNotice ? <span className="notice">Notice</span> : post.id}</td>
                <td className="table-cell title-cell">{post.title}</td>
                <td className="table-cell">{post.author}</td>
                <td className="table-cell">{post.date}</td>
                <td className="table-cell">{post.views}</td>
                <td className="table-cell">{post.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
