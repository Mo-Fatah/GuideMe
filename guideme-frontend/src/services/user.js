import axios from 'axios';
const baseURl = 'http://localhost:3003/api/user';

export const createNew = async (newUser) => {
  const result = await axios.post(baseURl, newUser);
  return result.data;
}