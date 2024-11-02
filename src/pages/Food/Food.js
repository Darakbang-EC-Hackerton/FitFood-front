// src/pages/Food/Food.js

import React, { useState } from 'react';
import './Food.css';
import { Button, Input, InputLabel, InputAdornment } from '@mui/material'; // InputLabel로 수정
import { Leaf, Search } from 'lucide-react';

const foodDatabase = [
  { name: "사과", calories: 52 },
  { name: "바나나", calories: 89 },
  { name: "닭가슴살", calories: 165 },
  { name: "브로콜리", calories: 34 },
  { name: "현미밥", calories: 111 },
];

export default function Food() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleSearch = () => {
    const results = foodDatabase.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const addFood = (food) => {
    setSelectedFoods([...selectedFoods, { ...food, amount: 100 }]);
    setSearchTerm('');
    setSearchResults([]);
  };

  const updateAmount = (index, amount) => {
    const updatedFoods = [...selectedFoods];
    updatedFoods[index].amount = amount;
    setSelectedFoods(updatedFoods);
  };

  const totalCalories = selectedFoods.reduce((sum, food) => sum + (food.calories * food.amount / 100), 0);

  return (
    <div className="food-container">
      <div className="food-box">
        <h1 className="food-title">
          <Leaf className="icon" />
          음식 검색
        </h1>

        <div className="search-section">
          <InputLabel htmlFor="food-search">음식 검색</InputLabel> {/* InputLabel 사용 */}
          <div className="search-input-container">
            <Input
              id="food-search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="음식 이름을 입력하세요"
            />
            <Button onClick={handleSearch} className="search-button">
              <Search className="icon-small" />
            </Button>
          </div>
        </div>

        {searchResults.length > 0 && (
          <div className="search-results">
            <h2>검색 결과</h2>
            <ul>
              {searchResults.map((food, index) => (
                <li key={index} className="food-item">
                  <span>{food.name} (100g당 {food.calories}kcal)</span>
                  <Button onClick={() => addFood(food)} className="add-button">
                    추가
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="selected-foods">
          <h2>등록된 음식</h2>
          {selectedFoods.map((food, index) => (
            <div key={index} className="food-entry">
              <Input
                type="text"
                value={food.name}
                onChange={(e) => {
                  const updatedFoods = [...selectedFoods];
                  updatedFoods[index].name = e.target.value;
                  setSelectedFoods(updatedFoods);
                }}
                placeholder="음식 이름"
              />
              <Input
                type="number"
                value={food.amount}
                onChange={(e) => updateAmount(index, Number(e.target.value))}
                placeholder="양 (g)"
                endAdornment={<InputAdornment position='end'>g</InputAdornment>}
              />
              <span>{Math.round((food.calories * food.amount) / 100)} kcal</span>
              <Button
                onClick={() => {
                  const updatedFoods = selectedFoods.filter((_, i) => i !== index);
                  setSelectedFoods(updatedFoods);
                }}
                className="remove-button"
                size="small"
              >
                삭제
              </Button>
            </div>
          ))}
        </div>

        <div className="total-calories">
          <p>
            총 칼로리: <span>{Math.round(totalCalories)}</span> kcal
          </p>
        </div>
      </div>
    </div>
  );
}
