// src/pages/Login/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import logo from '../../assets/logo.png';
import './Login.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    // ID와 비밀번호가 "admin"일 경우에만 로그인 성공
    if (id === 'admin' && password === 'admin') {
      // Redux에 로그인 상태 업데이트 및 메인 페이지로 이동
      dispatch(login({ id }));
      navigate('/main');
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="login-page">
      <header className="start-header">
        <Link to="/" className="start-logo">
          <img src={logo} alt="Logo" />
        </Link>
      </header>
      <main className="login-content">
        <div className="login-box">
          <h1>로그인</h1>
          <div className="login-field">
            <label htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">PW</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            로그인
          </button>
          <p className="signup-link">
            <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;
