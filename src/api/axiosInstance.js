// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '', // 기본 경로 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
