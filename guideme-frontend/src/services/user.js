import axios from 'axios';

const baseURl = '/api/user';

// eslint-disable-next-line
export const createNew = async (newUser) => {
  const result = await axios.post(baseURl, newUser);
  return result.data;
};
