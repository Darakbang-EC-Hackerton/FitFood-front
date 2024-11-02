// // src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // 로고 경로 확인 필요
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/main" className="logo-link">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
    </header>
  );
}

export default Header;
