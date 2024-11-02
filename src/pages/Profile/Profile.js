// src/pages/Profile.js

import React from 'react';
import './Profile.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';

export default function Profile() {
  const recommendedCalories = useSelector((state)=>state.calorie.recommendedCalories);
  const navigate = useNavigate();
  const handleCalculateClick = () =>{
    navigate('/calculator');
  }

  return (
    <div className="profile-container">
      <div className="status-message-container">
        <div className="status-content">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Profile"
            className="profile-image"
          />
          <div>
            <h2 className="status-title">
              상태메세지
            </h2>
            <p className="status-description">
              상태메세지 이다
            </p>
            
          </div>
        </div>
      </div>
     <div className="calorie-container">
      <div className="calorie-content">
        <button className="calculate" onClick={handleCalculateClick}>
          추천 일일 칼로리 계산하기
        </button>
        <Paper elevation={3} className="calorie-recommend">
          <Typography variant="p">
            추천 일일 칼로리 섭취량:{recommendedCalories !== null ? `${recommendedCalories} kcal` : '칼로리를 계산하여 결과를 확인하세요.'}
          </Typography>
        </Paper>
      </div>
     </div>
    </div>
  );
}
