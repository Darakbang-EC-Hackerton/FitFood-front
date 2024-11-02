// src/pages/Start.js

import React from 'react';
import './Start.css';

export default function Start() {
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

      {/* Content Section */}
      <section className="content-section">
        <div className="section-container">
          <h2 className="content-title">
            미식의 세계를 탐험하세요
          </h2>
          <div className="content-grid">
            <p className="content-text">
              우리는 음식이 단지 질수품이 아닌 모험이 되는 플랫폼을 제공합니다. 당신이 요리의 정글에서 무엇을 먹었는지 기록하고 당신의 먹을 수 있는 모험을 세계에 알리세요
            </p>
            <p className="content-text">
              그뿐만 아니라, 우리는 더 나은 영양을 향한 여정에서 여러분의 충성스러운 지원자입니다. 저희 페이지에서는 식사의 칼로리를 계산하여 편리하게 다이어트를 관리할 수 있도록 도와드립니다.
            </p>
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
            <button className="sign-up-button">
              Sign Up
            </button>
            <button className="login-button">
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="forum-section">
        <div className="section-container forum-container">
          <div className="forum-text">
            <h2 className="forum-title">
              Forage In Our<br />Forum
            </h2>
            <p className="forum-description">
              우리의 온라인 커뮤니티는 열정적인 음식의 탐험가들로 붐비고 있습니다.<br />
              사람들은 자신의 경험, 미식가 된, 모험적인 요리법 등을 공유합니다. 배우고, 영감을 얻고, 영감을 얻기 위해 달려가세요!
            </p>
          </div>
          <div className="forum-image">
            <div className="svg-container">
              <svg className="svg-full" viewBox="0 0 200 200">
                <path
                  d="M100,20 L150,180 L50,180 Z"
                  fill="#78909C"
                  className="svg-rotate-opposite"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="illustration-section">
        <div className="illustration-container">
          <div className="illustration-box">
            <svg viewBox="0 0 128 192" className="svg-full">
              <rect width="100" height="160" x="14" y="16" fill="#FF5252" rx="20" />
            </svg>
          </div>
          <div className="illustration-box">
            <svg viewBox="0 0 128 192" className="svg-full">
              <rect width="100" height="160" x="14" y="16" fill="#3F51B5" rx="20" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
