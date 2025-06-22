import api from './apiService';

export const generateShareToken = async (accessToken) => {
  const res = await api.post(
    '/share',
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return res.data.shareToken;
};
