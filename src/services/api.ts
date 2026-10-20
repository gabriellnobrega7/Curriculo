import axios from 'axios';

const api = axios.create({
  baseURL: 'https://curriculo-api-aos-seven.vercel.app/api',
});

export default api;