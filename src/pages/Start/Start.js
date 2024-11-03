// src/pages/Start.js

import React from 'react';
import './Start.css';
import { useNavigate } from 'react-router-dom';

export default function Start() {
  const navigate = useNavigate();
  const handleKakaoLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen">
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="section-container">
          <div className="welcome-text">
            <h2 className="welcome-title">
              WELCOME<br />
              FIT FOOD
            </h2>
          </div>
          <div className="welcome-image">
            <div className="svg-container">
              <svg className="svg-full" viewBox="0 0 200 200">
                <path
                  d="M100,20 L150,180 L50,180 Z"
                  fill="#3F51B5"
                  className="svg-rotate"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            요리 탐구를 시작할 준비가 되셨나요?<br />
            우리 커뮤니티에 가입하세요!
          </h1>
          <div className="hero-buttons">
            <button className="sign-up-button"  onClick={handleKakaoLogin}>
              Sign Up
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}
