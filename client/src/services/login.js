import axios from 'axios';

const baseUrl = '/api/login';

// eslint-disable-next-line
export const login = async (credentials) => {
  const result = await axios.post(baseUrl, credentials);
  return result.data;
};
