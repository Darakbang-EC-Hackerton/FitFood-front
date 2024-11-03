// src/store/slices/calorieSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const calorieSlice = createSlice({
  name: 'calorie',
  initialState: {
    recommendedCalories: null,
    searchedFoodData: null, // 음식 데이터 전체 JSON 저장
  },
  reducers: {
    setRecommendedCalories: (state, action) => {
      state.recommendedCalories = action.payload;
    },
    setSearchedFoodData: (state, action) => {
      state.searchedFoodData = action.payload;
    },
  },
});

export const { setRecommendedCalories, setSearchedFoodData } = calorieSlice.actions;

export default calorieSlice.reducer;
