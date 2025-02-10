import { apiClient } from '../utils/apiClient';

export const createCar= async (userData) => {
  return await apiClient('/vehiculos/create', 'POST', userData);
};

export const getCars= async (userData) => {
  return await apiClient('/vehiculos/', 'GET', userData);
};