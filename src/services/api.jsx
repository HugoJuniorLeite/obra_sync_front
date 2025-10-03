// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use(config => {
  // Define Content-Type: application/json APENAS se não for FormData
  if (!(config.data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }
  // Se for FormData, deixa o axios definir automaticamente
  return config;
});

export default api;