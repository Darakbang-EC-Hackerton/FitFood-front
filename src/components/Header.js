// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
}

export default Header;
