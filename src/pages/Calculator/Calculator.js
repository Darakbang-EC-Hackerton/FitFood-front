// src/pages/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';
import { Leaf } from 'lucide-react';
import InputGroup from '../../components/InputGroup'; // InputGroup 컴포넌트 import
import { useDispatch, useSelector } from 'react-redux';
import { setRecommendedCalories } from '../../store/slices/calorieSlice';
import { useNavigate } from 'react-router-dom';

export default function Calculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  
  const navigate = useNavigate();
  const handleProfileClick = () =>{
    navigate('/profile');
  }

  const dispatch = useDispatch();
  const recommendedCalories = useSelector((state)=>state.calorie.recommendedCalories);
 
  const calculateCalories = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (isNaN(h) || isNaN(w) || isNaN(a) || !gender || !activityLevel) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a); 
    } else {
      bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a); 
    }

    let calories;
    switch (activityLevel) {
      case 'low':
        calories = bmr * 1.2;
        break;
      case 'medium':
        calories = bmr * 1.55;
        break;
      case 'high':
        calories = bmr * 1.9;
        break;
      default:
        calories = bmr;
    }

    dispatch(setRecommendedCalories(Math.round(calories)));
  };

  return (
    <div className="calculator-container">
      <div className="calculator-box">
        <h1 className="calculator-title">
          <Leaf className="icon" />
          칼로리 계산기
        </h1>
        
        <InputGroup 
          label="키 (cm)" 
          id="height" 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
          placeholder="키를 입력하세요" 
        />
        
        <InputGroup 
          label="몸무게 (kg)" 
          id="weight" 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
          placeholder="몸무게를 입력하세요" 
        />
        
        <InputGroup 
          label="나이 (세)" 
          id="age" 
          type="number" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="나이를 입력하세요" 
        />
        
        <div className="input-group">
          <label className="input-label">성별</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              남성
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              여성
            </label>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="activity" className="input-label">활동량</label>
          <select
            id="activity"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="input-field"
          >
            <option value="">활동량을 선택하세요</option>
            <option value="low">낮음</option>
            <option value="medium">중간</option>
            <option value="high">높음</option>
          </select>
        </div>
        
        <button onClick={calculateCalories} className="calculate-button">
          칼로리 계산하기
        </button>
        
        {recommendedCalories !== null && (
          <div className="result-box">
            <p className="result-text">
              귀하의 권장 일일 칼로리 섭취량은 <span className="result-value">{recommendedCalories}</span> kcal 입니다.
            </p>
            <button onClick={handleProfileClick} className="calculate-button">
              프로필로 돌아가기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
