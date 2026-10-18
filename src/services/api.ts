import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Garante compatibilidade total de exportação para Web e Mobile no Expo
export default api;