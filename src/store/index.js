// src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import calorieReducer from './slices/calorieSlice';
import foodReducer from './slices/foodSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    calorie: calorieReducer,
    food: foodReducer, 
  },
});

export default store;
