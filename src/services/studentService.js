import api from './apiService';

export const getSharedStudentData = async (shareToken) => {
  const res = await api.get(`/share?shareToken=${shareToken}`);
  return res.data;
};
