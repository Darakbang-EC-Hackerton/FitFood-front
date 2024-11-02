// src/store/slices/calorieSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const calorieSlice = createSlice({
  name: 'calorie',
  initialState: {
    recommendedCalories: null,
  },
  reducers: {
    setRecommendedCalories: (state, action) => {
      state.recommendedCalories = action.payload;
    },
  },
});

export const { setRecommendedCalories } = calorieSlice.actions;

export default calorieSlice.reducer;
