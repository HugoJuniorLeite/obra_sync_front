// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // ou .env
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
