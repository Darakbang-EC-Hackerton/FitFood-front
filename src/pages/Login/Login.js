// src/pages/Login/Login.js

import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import kakaoIcon from '../../assets/kakao-icon.png'; // 카카오톡 아이콘 이미지 경로 확인 필요

function Login() {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    // 로그인 로직 추가 (예: OAuth 연동)
    navigate('/main'); // 메인 페이지로 리다이렉트
  };

  return (
    <div className="login-container">
      <Paper elevation={3} className="login-box">
        <Typography variant="h3" className="login-title">
          LOGIN
        </Typography>
        <button className="kakao-button" onClick={handleKakaoLogin}>
          <img src={kakaoIcon} alt="Kakao Icon" className="kakao-icon" />
          <p>카카오로 시작하기</p>
        </button>
      </Paper>
    </div>
  );
}

export default Login;
