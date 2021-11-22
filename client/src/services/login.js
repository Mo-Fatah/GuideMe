import axios from 'axios';

const baseUrl = process.env === 'production'
  ? '/api/login'
  : 'http://localhost:3003/api/login';

// eslint-disable-next-line
export const login = async (credentials) => {
  const result = await axios.post(baseUrl, credentials);
  return result.data;
};
