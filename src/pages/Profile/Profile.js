// src/pages/Login/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Profile.css';

function Profile() {
  return (
    <div className="Profile">
      <header className="start-header">
        <Link to="/" className="start-logo">
          <img src={logo} alt="Logo" />
        </Link>
      </header>
      <main className="Profile-content">
        <div className="intro">
          <h1>프로필 페이지</h1>
          <p>프로필 페이지임</p>
        </div>
      </main>
    </div>
  );
}

export default Profile;
