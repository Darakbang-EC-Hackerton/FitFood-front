// src/pages/Signup/Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-page">
      <main className="signup-content">
        <div className="signup-box">
          <h2>회원가입</h2>
          <div className="signup-field">
            <label htmlFor="username">ID</label>
            <input type="text" id="username" placeholder="아이디를 입력하세요" />
          </div>
          <div className="signup-field">
            <label htmlFor="password">PW</label>
            <input type="password" id="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <button className="signup-button">회원가입</button>
          <p className="login-link">
            이미 계정이 있으신가요? <Link to="/login">로그인</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Signup;
