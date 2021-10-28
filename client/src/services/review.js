import axios from 'axios';

const baseUrl = 'http://localhost:3003/api/review';
// const baseUrl = '/api/review';

// eslint-disable-next-line
export const addReview = async (review, id) => {
  const result = await axios.post(`${baseUrl}/${id}`, review);
  return result.data;
};
