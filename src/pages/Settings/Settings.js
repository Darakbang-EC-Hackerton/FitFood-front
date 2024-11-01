// src/pages/Settings/Settings.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Settings.css';

function Settings() {
  return (
    <div className="Settings">
      <header className="start-header">
        <Link to="/" className="start-logo">
          <img src={logo} alt="Logo" />
        </Link>
      </header>
      <main className="Settings-content">
        <div className="intro">
          <h1>사이트 소개 문구</h1>
          <p>아무튼 소개 문구</p>
        </div>
      </main>
    </div>
  );
}

export default Settings;
