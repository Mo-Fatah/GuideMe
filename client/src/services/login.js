import axios from 'axios';

const baseUrl = process.env.NODE_ENV !== 'development'
  ? '/api/login'
  : 'http://localhost:3003/api/login';

// eslint-disable-next-line
export const login = async (credentials) => {
  const result = await axios.post(baseUrl, credentials);
  return result.data;
};
