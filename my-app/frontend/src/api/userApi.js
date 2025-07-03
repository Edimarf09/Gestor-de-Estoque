// frontend/src/api/userApi.js
import axios from 'axios';

const API_URL = 'http://localhost:1999/api/users';

export const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
