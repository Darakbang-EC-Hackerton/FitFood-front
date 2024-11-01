// src/pages/Main/Main.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (!isLoggedIn && !redirected) {
      setRedirected(true);
      alert('로그인이 필요합니다.');
      
      // alert 후 navigate 실행
      setTimeout(() => {
        navigate('/login');
      }, 0);
    }
  }, [isLoggedIn, redirected, navigate]);


  return (
    <div className="main-grid">
      <header className="header">Header</header>
      <aside className="sidebar-left">Left Sidebar</aside>
      <main className="content">Main Content</main>
      <aside className="sidebar-right">Right Sidebar</aside>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default Main;
