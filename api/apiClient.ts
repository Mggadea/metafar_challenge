import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Authorization: `apikey ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
});

export default apiClient;
