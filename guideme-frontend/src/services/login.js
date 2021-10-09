import axios from 'axios';
const baseUrl = 'http://localhost:3003/api/login';

export const login = async credentials => {
  const result = await axios.post(baseUrl, credentials);
  return result.data;
} 