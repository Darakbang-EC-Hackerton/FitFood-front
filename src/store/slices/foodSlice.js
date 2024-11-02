// src/store/slices/foodSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFoods: [], // 음식 목록
  totalCalories: 0,  // 총 칼로리
};

const foodSlice = createSlice({
  name: 'food',
  initialState,
  reducers: {
    addFood: (state, action) => {
      state.selectedFoods.push(action.payload);
    },
    setTotalCalories: (state, action) => {
      state.totalCalories = action.payload;
    },
    clearFoods: (state) => {
      state.selectedFoods = [];
      state.totalCalories = 0;
    },
  },
});

export const { addFood, setTotalCalories, clearFoods } = foodSlice.actions;
export default foodSlice.reducer;
