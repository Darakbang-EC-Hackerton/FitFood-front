// src/pages/Start/Start.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Header from '../../components/Header';
import './Start.css';

function Start() {
  return (
    <div className="start">
      <Header />
      <main className="start-content">
        <div className="intro">
          <h1>사이트 소개 문구</h1>
          <p>아무튼 소개 문구</p>
          <div className="button-group">
            <Link to="/login" className="button login-button">로그인</Link>
            <Link to="/signup" className="button signup-button">회원가입</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Start;
