import axios from 'axios';

const baseUrl = 'http://localhost:3003/api/user';

// eslint-disable-next-line
export const createNew = async (newUser) => {
  const result = await axios.post(baseUrl, newUser);
  return result.data;
};
