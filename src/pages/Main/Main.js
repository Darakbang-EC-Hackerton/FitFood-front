// src/pages/Main.js

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import './Main.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Main() {
  const navigate = useNavigate();
  const handleMealClick = () =>{
    navigate('/food');
  }

  const [currentDate] = useState(new Date());

  const selectedFoods = [
    { name: "사과", calories: 52, amount: 100 },
    { name: "바나나", calories: 89, amount: 150 },
  ];

  // Redux에서 selectedFoods 가져오기
  // const selectedFoods = useSelector((state) => state.food.selectedFoods);
  console.log("Selected Foods:", selectedFoods);


  return (
    <div className="main-container">
      <header className="header2">
        <h1 className="title">오늘의 식사 기록</h1>
      </header>

      <div className="suggestions-grid">
        {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map((meal, index) => (
          <div key={index} className="suggestion-card">
            <h2 className="suggestion-value">{[120, 200, 150, 100][index]}</h2>
            <p className="suggestion-label">{meal} Calories</p>
          </div>
        ))}
      </div>

      <section className="meal-suggestions">
        <h2 className="meal-suggestions-title">식사기록</h2>
        <p className="meal-suggestions-description">
          식사를 기록해주마
        </p>

        <div className="meal-list">
          {selectedFoods.map((food, index) => (
            <button key={index} className="meal-item" onClick={handleMealClick}>
              <div>
                <p className="meal-time">
                  {currentDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  {` - ${food.name}`}
                </p>
                <p className="meal-items">{`${food.amount}g (${Math.round((food.calories * food.amount) / 100)} kcal)`}</p>
              </div>
              <ChevronRight className="icon" />
            </button>
          ))}
        </div>
        

        <button className="save-button">Start saving</button>

        <div className="progress">
          <h2 className="progress-title">Save Progress</h2>
          <p className="progress-description">Your meal history a click away. Save them all, re-visit them anytime.</p>
        </div>

        <div className="calories-grid">
          {[['2200', '오늘 섭취한 총 칼로리'], ['300', '남은 칼로리']].map(([value, label], index) => (
            <div key={index} className="calorie-card">
              <h3 className="calorie-value">{value}</h3>
              <p className="calorie-label">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
