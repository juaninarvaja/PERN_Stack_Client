// api/auth.js
import { apiClient } from '../utils/apiClient';

export const createUser = async (userData) => {
  return await apiClient('/users/create', 'POST', userData);
};

export const loginUser = async (userData) => {
    return await apiClient('/users/login', 'POST', userData);
};
