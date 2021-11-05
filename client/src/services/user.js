import axios from 'axios';

const baseUrl = '/api/user';

// eslint-disable-next-line
export const createNew = async (newUser) => {
  const result = await axios.post(baseUrl, newUser);
  return result.data;
};
