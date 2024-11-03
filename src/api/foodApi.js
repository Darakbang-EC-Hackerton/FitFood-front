// src/api/foodApi.js
import axiosInstance from './axiosInstance';

// 음식 이름을 기반으로 칼로리 정보 조회
// export const getCaloriesByFoodName = async (foodName) => {
//     try {
//       const response = await axiosInstance.get(`localhost:8080/api/food/calories`, {
//         params: { foodName }, // foodName을 쿼리 파라미터로 전달
//       });
//       console.log(response.data);
//       return response.data; 
//     } catch (error) {
//       console.error('Failed to fetch calorie information:', error);
//       throw error; 
//     }
// };

// src/api/foodApi.js

// 음식 이름을 기반으로 칼로리 정보 조회
// src/api/foodApi.js
// src/api/foodApi.js
export const getCaloriesByFoodName = async (foodName) => {
    try {
      const response = await fetch(`/api/food/calories?foodName=${encodeURIComponent(foodName)}`, {
        method: 'GET',
        cache: 'no-store', // 매번 새 데이터를 가져오도록 캐시 설정
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch calorie information');
      }
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Failed to fetch calorie information:', error);
      throw error;
    }
  };
  
  
  

// {날짜}의 먹은 음식들 조회
export const getFoodsByDate = async (date) => {
  const response = await axiosInstance.get(`/foods/${date}`);
  return response.data;
};

// 오늘 먹은 총 칼로리량 조회
export const getTotalCalories = async () => {
  const response = await axiosInstance.get('/food/total_calorie');
  return response.data;
};

// 남은 칼로리를 바탕으로 끼니 추천
export const getMealRecommendation = async (calorie) => {
  const response = await axiosInstance.get(`/food/${calorie}`);
  return response.data;
};

// {아침, 점심, 저녁, 간식} 식단 등록
export const registerMeal = async (mealType, foodData) => {
  const response = await axiosInstance.post(`/food/${mealType}`, foodData);
  return response.data;
};

// 해당 음식 수정
export const updateFood = async (id, foodData) => {
  const response = await axiosInstance.put(`/food/${id}`, foodData);
  return response.data;
};

// 해당 음식 삭제
export const deleteFood = async (id) => {
  const response = await axiosInstance.delete(`/food/${id}`);
  return response.data;
};
