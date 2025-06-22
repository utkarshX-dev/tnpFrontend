import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tnp-recruitment-challenge.manitvig.live',
});

export default api;