import api from './apiService';

export const login = async (username, password) => {
  const res = await api.post('/login', { username, password });
  return res.data;
};

export const refreshAccessToken = async (refreshToken) => {
  const res = await api.post('/refresh', { refreshToken });
  return res.data;
};