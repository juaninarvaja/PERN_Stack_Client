// utils/apiClient.js
const API_URL = 'http://localhost:3000';

export const apiClient = async (endpoint, method = 'GET', body = null) => {
  const headers = {
    'Content-Type': 'application/json',
    // Puedes agregar más headers si es necesario, como el token de autenticación.
  };

  const options = {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    
    // Manejar respuestas no exitosas
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la solicitud API:', error);
    throw error;
  }
};
